document.addEventListener("DOMContentLoaded", () => {
    const data = JSON.parse(document.getElementById("json-data").textContent);

    // KPIs
    document.getElementById("latestFBS").innerText = data.latest_fbs + " mg/dL";
    document.getElementById("averageFBS").innerText = data.average_fbs + " mg/dL";
    document.getElementById("highestFBS").innerText = data.highest_fbs + " mg/dL";
    document.getElementById("abnormalCount").innerText = data.abnormal_readings_count + " / " + data.total_readings;

    // Line Graph 1 – FBS Trend
    const trendCtx = document.getElementById("trendChart").getContext("2d");
    new Chart(trendCtx, {
        type: "line",
        data: {
            labels: data.fbs_trend.map(e => e.date),
            datasets: [{
                label: "FBS (mg/dL)",
                data: data.fbs_trend.map(e => e.value),
                borderColor: "#90caf9",
                backgroundColor: "rgba(144, 202, 249, 0.2)",
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            scales: {
                y: {
                    min: 70,
                    max: 150,
                    ticks: {
                        color: "#fff"
                    },
                    grid: {
                        color: "#333"
                    }
                },
                x: {
                    ticks: {
                        color: "#fff"
                    },
                    grid: {
                        color: "#333"
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: "#fff"
                    }
                }
            }
        }
    });

    // Line Graph 2 – Deviation Chart
    const devCtx = document.getElementById("deviationChart").getContext("2d");
    new Chart(devCtx, {
        type: "line",
        data: {
            labels: data.deviation_from_normal.map(e => e.date),
            datasets: [{
                label: "Deviation from 99 mg/dL",
                data: data.deviation_from_normal.map(e => e.deviation),
                borderColor: "#f48fb1",
                backgroundColor: "rgba(244, 143, 177, 0.2)",
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            scales: {
                y: {
                    ticks: {
                        color: "#fff"
                    },
                    grid: {
                        color: "#333"
                    }
                },
                x: {
                    ticks: {
                        color: "#fff"
                    },
                    grid: {
                        color: "#333"
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: "#fff"
                    }
                }
            }
        }
    });
});
