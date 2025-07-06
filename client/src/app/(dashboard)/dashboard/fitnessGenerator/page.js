'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = 'https://bnminmdgnjnkfkxfdgcf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJubWlubWRnbmpua2ZreGZkZ2NmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkyMDU0NzAsImV4cCI6MjA2NDc4MTQ3MH0.SoQYKjq_QMNKs5W6zK-ujVE2t9i1Zr-uiiEHJyzqifk';

const supabase = createClient(supabaseUrl, supabaseKey);

// Gemini API configuration
const GEMINI_API_KEY = 'AIzaSyDpYEhK24k0LL72AXc0Rq6O4IMnXnHPVno';

export default function AIDietPage() {
  const [patientName, setPatientName] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [fullPlan, setFullPlan] = useState('');
  const [selectedPatientName, setSelectedPatientName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedPlan, setEditedPlan] = useState('');
  const [error, setError] = useState('');

  // Search patient names
  const searchPatients = async (query) => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('Patient')
        .select('name')
        .ilike('name', `%${query}%`)
        .limit(10);

      if (error) throw error;
      setSuggestions(data.map(item => item.name));
    } catch (err) {
      console.error('Error searching patients:', err);
      setSuggestions([]);
    }
  };

  // Get patient by name
  const getPatientByName = async (name) => {
    try {
      const { data, error } = await supabase
        .from('Patient')
        .select('*')
        .eq('name', name)
        .limit(1);

      if (error) throw error;
      return data.length > 0 ? data[0] : null;
    } catch (err) {
      console.error('Error getting patient:', err);
      return null;
    }
  };

  // Generate fitness plan using Gemini API
  const generateFitnessPlan = async (prompt) => {
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt
            }]
          }]
        })
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error?.message || 'Failed to generate plan');
      }

      return data.candidates[0].content.parts[0].text;
    } catch (err) {
      console.error('Gemini API error:', err);
      throw new Error('Sorry, could not generate the plan at the moment.');
    }
  };

  // Handle input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    setPatientName(value);
    searchPatients(value);
  };

  // Handle suggestion click
  const handleSuggestionClick = (name) => {
    setPatientName(name);
    setSuggestions([]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!patientName.trim()) {
      setError('Patient name is required.');
      return;
    }

    setIsLoading(true);

    try {
      const patient = await getPatientByName(patientName);
      
      if (!patient) {
        setError(`No patient found with name '${patientName}'.`);
        setIsLoading(false);
        return;
      }

      const prompt = `
You are a certified health expert. Create a customized **diet plan** and **exercise routine** for the following patient:

Name: ${patient.name || 'N/A'}
Age: ${patient.age || 'N/A'}
Dietary Preferences: ${patient.dietaryPreferences || 'N/A'}
Health Goals: ${patient.healthGoals || 'N/A'}
Conditions: ${patient.conditions || 'N/A'}
Allergies: ${patient.allergies || 'N/A'}
Key Issues: ${patient.keyIssues || 'N/A'}
Medications: ${patient.medications || 'N/A'}
Prescription Text: ${patient.prescriptionText || 'N/A'}

Instructions:
1. The diet plan should be practical, economical, and for lower, middle class indian people.
2. The exercise plan should consider the patient's health conditions and be suitable for daily practice.
3. Avoid any special characters, markdown, or formatting like asterisks and use only numbers as pointers.
4. Use plain text and clear headings like 'Diet Plan:' and 'Exercise Plan:'.
5. Provide a complete and friendly plan for both diet and fitness.
6. Do not include any medical disclaimers, suggestions to consult a doctor or dietitian, or generic safety notes. Provide only the requested personalized diet and exercise plan.
`;

      const plan = await generateFitnessPlan(prompt);
      setFullPlan(plan);
      setEditedPlan(plan);
      setSelectedPatientName(patientName);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  // Toggle edit mode
  const toggleEdit = () => {
    if (isEditing) {
      setFullPlan(editedPlan);
    }
    setIsEditing(!isEditing);
  };

  // Handle click outside suggestions
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.suggestions-container') && 
          !e.target.closest('#patient_name')) {
        setSuggestions([]);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen p-8 flex items-center justify-center">
      <div className="w-full max-w-4xl">
        <h1 className="text-cyan-400 text-4xl font-bold text-center mb-6 mt-4">
          AI-Powered Fitness Generator
        </h1>
        
        <div className="flex flex-col items-center justify-center">
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
            <div className="relative">
              <label htmlFor="patient_name" className="block mb-2 text-cyan-400 font-bold">
                Patient Name:
              </label>
              <input
                type="text"
                id="patient_name"
                value={patientName}
                onChange={handleInputChange}
                required
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded text-white text-base focus:outline-none focus:ring-2 focus:ring-cyan-400"
                autoComplete="off"
              />
              {suggestions.length > 0 && (
                <div className="suggestions-container absolute top-full left-0 right-0 max-h-40 overflow-y-auto bg-gray-700 border border-gray-600 border-t-0 rounded-b z-50">
                  {suggestions.map((name, index) => (
                    <div
                      key={index}
                      className="p-3 text-white cursor-pointer hover:bg-gray-600 border-b border-gray-600 last:border-b-0"
                      onClick={() => handleSuggestionClick(name)}
                    >
                      {name}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-600 text-white font-bold py-3 px-6 rounded uppercase tracking-wide transition-colors duration-300"
            >
              {isLoading ? 'Generating Plan...' : 'Generate Plan'}
            </button>
          </form>

          {error && (
            <div className="mt-4 p-4 bg-red-900 text-red-300 rounded text-center max-w-md">
              {error}
            </div>
          )}

          {fullPlan && (
            <div className="mt-8 w-full">
              <h2 className="text-cyan-400 text-3xl font-bold text-center mb-6">
                Fitness Plan for {selectedPatientName}
              </h2>
              <div className="max-w-4xl mx-auto">
                {!isEditing ? (
                  <pre className="w-full text-white p-4 rounded bg-black border border-gray-600 whitespace-pre-wrap mb-4 min-h-80 font-mono overflow-x-auto">
                    {fullPlan}
                  </pre>
                ) : (
                  <textarea
                    value={editedPlan}
                    onChange={(e) => setEditedPlan(e.target.value)}
                    className="w-full text-white p-4 rounded bg-gray-700 border border-gray-600 mb-4 min-h-80 font-mono resize-y focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                )}
                <div className="flex justify-center">
                  <button
                    type="button"
                    onClick={toggleEdit}
                    className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded uppercase tracking-wide transition-colors duration-300 max-w-48"
                  >
                    {isEditing ? 'Save Changes' : 'Edit'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}