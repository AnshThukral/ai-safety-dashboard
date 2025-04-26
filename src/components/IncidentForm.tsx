import { useState } from "react";
import { Incident } from "../types/Incident";
import React from "react";

interface IncidentFormProps {
  onAddIncident: (incident: Incident) => void;
}

function IncidentForm({ onAddIncident }: IncidentFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState<'Low' | 'Medium' | 'High'>('Low');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      alert("⚠️ Please fill in all fields.");
      return;
    }
    const newIncident: Incident = {
      id: Date.now(),
      title,
      description,
      severity,
      reported_at: new Date().toISOString(),
    };
    onAddIncident(newIncident);
    setTitle('');
    setDescription('');
    setSeverity('Low');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gradient-to-r from-black via-red-600 to-golden-500 p-10 rounded-3xl shadow-2xl max-w-3xl mx-auto transition-transform hover:scale-105 hover:rotate-1 duration-500 backdrop-blur-lg animate-fade-in"
    >
      <h2 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-golden-300 to-yellow-500 mb-8 animate-fade-in-down">
        📝 Report a New Incident
      </h2>

      <input
        type="text"
        placeholder="🚨 Incident Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-4 mb-5 border-2 border-red-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-red-500 bg-white transition-all duration-300 placeholder:text-red-400 font-medium"
      />

      <textarea
        placeholder="🧾 Incident Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-4 mb-5 h-40 resize-none border-2 border-red-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-red-500 bg-white transition-all duration-300 placeholder:text-red-400 font-medium"
      />

      <select
        value={severity}
        onChange={(e) => setSeverity(e.target.value as any)}
        className="w-full p-4 mb-8 border-2 border-red-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-red-500 bg-white transition-all duration-300 font-medium"
      >
        <option value="Low">🟢 Low Severity</option>
        <option value="Medium">🟡 Medium Severity</option>
        <option value="High">🔴 High Severity</option>
      </select>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-red-600 via-golden-500 to-yellow-600 text-white font-bold py-4 rounded-lg shadow-md hover:shadow-xl hover:brightness-110 transition-all duration-300"
      >
        🚀 Submit Incident
      </button>
    </form>
  );
}

export default IncidentForm;
