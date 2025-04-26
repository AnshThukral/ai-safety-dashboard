import { useState } from "react";
import { Incident } from "../types/Incident";
import React from "react";

interface IncidentItemProps {
  incident: Incident;
}

function IncidentItem({ incident }: IncidentItemProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-gradient-to-br from-black via-red-600 to-golden-500 rounded-3xl shadow-2xl p-8 mb-8 transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-3xl backdrop-blur-md animate-fade-in-up">
      <div className="flex flex-col gap-3">
        <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-golden-300 to-yellow-500">
          {incident.title}
        </h3>
        <p className="text-sm text-gray-200">
          🔥 Severity: <span className="font-bold text-red-500">{incident.severity}</span>
        </p>
        <p className="text-sm text-gray-300">
          🕒 Reported: <span className="font-medium">{new Date(incident.reported_at).toLocaleDateString()}</span>
        </p>

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="mt-4 self-start bg-gradient-to-r from-red-600 via-golden-500 to-yellow-600 text-white font-semibold px-5 py-2 rounded-full hover:brightness-110 transition-all duration-300 shadow-md hover:shadow-xl"
        >
          {showDetails ? "🔽 Hide Details" : "🔍 View Details"}
        </button>
      </div>

      {showDetails && (
        <div className="mt-6 p-5 bg-red-700 rounded-2xl text-gray-100 leading-relaxed animate-fade-in">
          {incident.description}
        </div>
      )}
    </div>
  );
}

export default IncidentItem;
