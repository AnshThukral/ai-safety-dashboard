import { Incident } from "../types/Incident";
import IncidentItem from "./IncidentItem";
import React from "react";

interface IncidentListProps {
  incidents: Incident[];
}

function IncidentList({ incidents }: IncidentListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 animate-fade-in">
      {incidents.map((incident) => (
        <IncidentItem key={incident.id} incident={incident} />
      ))}
    </div>
  );
}

export default IncidentList;
