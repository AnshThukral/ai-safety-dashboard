import { useState } from 'react';
import { Incident } from './types/Incident';
import { mockIncidents } from './data/mockIncidents';
import IncidentList from './components/IncidentList';
import IncidentForm from './components/IncidentForm';
import './App.css';
import React from "react";

function App() {
  const [incidents, setIncidents] = useState<Incident[]>(mockIncidents);
  const [filter, setFilter] = useState<'All' | 'Low' | 'Medium' | 'High'>('All');
  const [sortOrder, setSortOrder] = useState<'Newest' | 'Oldest'>('Newest');

  const handleAddIncident = (newIncident: Incident) => {
    setIncidents([newIncident, ...incidents]);
  };

  const filteredIncidents = incidents
    .filter((incident) => filter === 'All' || incident.severity === filter)
    .sort((a, b) => {
      if (sortOrder === 'Newest') {
        return new Date(b.reported_at).getTime() - new Date(a.reported_at).getTime();
      } else {
        return new Date(a.reported_at).getTime() - new Date(b.reported_at).getTime();
      }
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-600 to-golden-500 p-6 overflow-x-hidden">
      <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-golden-500 to-yellow-500 mb-12 animate-fade-down">
        🚨 AI Safety Incident Dashboard 🚨
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12 animate-fade-in">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value as any)}
          className="p-3 rounded-lg border-2 border-golden-300 shadow-lg bg-black text-white hover:border-red-500 focus:ring-4 focus:ring-red-500 transition-all font-medium"
        >
          <option value="All">🌎 All Severities</option>
          <option value="Low">🟢 Low</option>
          <option value="Medium">🟡 Medium</option>
          <option value="High">🔴 High</option>
        </select>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as any)}
          className="p-3 rounded-lg border-2 border-golden-300 shadow-lg bg-black text-white hover:border-red-500 focus:ring-4 focus:ring-red-500 transition-all font-medium"
        >
          <option value="Newest">🆕 Newest First</option>
          <option value="Oldest">📜 Oldest First</option>
        </select>
      </div>

      <div className="space-y-8 animate-fade-in">
        <IncidentList incidents={filteredIncidents} />
        <IncidentForm onAddIncident={handleAddIncident} />
      </div>
    </div>
  );
}

export default App;
