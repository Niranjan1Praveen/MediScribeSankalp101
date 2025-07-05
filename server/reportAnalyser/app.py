import os
import json
import re
import logging
from flask import Flask, render_template, request, redirect, url_for
from werkzeug.utils import secure_filename
from dotenv import load_dotenv
import google.generativeai as genai
from PyPDF2 import PdfReader

# Load environment variables
load_dotenv()
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

# Configure Gemini
genai.configure(api_key=GEMINI_API_KEY)
model = genai.GenerativeModel("gemini-1.5-flash")

# Flask app setup
app = Flask(__name__)
UPLOAD_FOLDER = os.path.join(os.path.dirname(__file__), 'uploads')
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

DATA_PATH = os.path.join("static", "data", "fbs_data.json")

# Logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


def extract_fbs_data(text: str) -> dict:
    prompt = f"""
Extract the patient name and all date-wise fasting blood sugar (FBS) values from the medical report text below.

Return ONLY a JSON object in the format:
{{
  "patient_name": "Name",
  "fbs_trend": [
    {{ "date": "YYYY-MM-DD", "value": float }}
  ]
}}

Report:
{text}
"""
    response = model.generate_content(prompt)
    raw = getattr(response, "text", str(response)).strip()

    print("=== Gemini Raw Response ===")
    print(raw)

    # Remove ```json or ``` fences
    raw = re.sub(r'^```(?:json)?\s*', '', raw)
    raw = re.sub(r'\s*```$', '', raw)

    try:
        return json.loads(raw)
    except json.JSONDecodeError:
        logger.debug("Direct JSON load failed, trying fallback.")

    match = re.search(r'\{[\s\S]*\}', raw)
    if match:
        try:
            return json.loads(match.group(0))
        except Exception as e:
            logger.error("Fallback JSON parse failed: %s", e)

    logger.warning("Gemini returned an unparseable response.")
    return {}


def compute_kpis(data):
    fbs_list = data.get("fbs_trend", [])
    if not fbs_list:
        return data

    values = [entry["value"] for entry in fbs_list]
    dates = [entry["date"] for entry in fbs_list]

    latest_fbs = values[-1]
    average_fbs = round(sum(values) / len(values), 1)
    highest_fbs = max(values)
    total_readings = len(values)
    abnormal_readings_count = sum(1 for v in values if v >= 100)

    deviation_from_normal = [
        {"date": d, "deviation": round(v - 99.0, 1)} for d, v in zip(dates, values)
    ]

    data.update({
        "latest_fbs": latest_fbs,
        "average_fbs": average_fbs,
        "highest_fbs": highest_fbs,
        "total_readings": total_readings,
        "abnormal_readings_count": abnormal_readings_count,
        "deviation_from_normal": deviation_from_normal
    })
    return data


@app.route("/", methods=["GET", "POST"])
def upload_file():
    if request.method == "POST":
        uploaded_file = request.files["file"]
        if uploaded_file and uploaded_file.filename.endswith(".pdf"):
            filename = secure_filename(uploaded_file.filename)
            filepath = os.path.join(app.config["UPLOAD_FOLDER"], filename)
            uploaded_file.save(filepath)

            reader = PdfReader(filepath)
            text = ""
            for page in reader.pages:
                text += page.extract_text() or ""

            extracted = extract_fbs_data(text)
            enriched = compute_kpis(extracted)

            with open(DATA_PATH, "w") as f:
                json.dump(enriched, f, indent=4)

            return redirect(url_for("dashboard"))
    return render_template("upload.html")


@app.route("/dashboard")
def dashboard():
    if not os.path.exists(DATA_PATH):
        return "No data found. Please upload a file first.", 404

    with open(DATA_PATH, "r") as f:
        data = json.load(f)

    return render_template("dashboard.html", data=json.dumps(data))


if __name__ == "__main__":
    app.run(debug=True, port=5001)
