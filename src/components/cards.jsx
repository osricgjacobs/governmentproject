import React from "react";

// Function to determine party color based on party name
const getPartyColor = (party) => {
if (party.includes("ANC")) return "bg-[#ffcb03] text-black"; 
    if (party === "DA") return "bg-[#2563eb] text-white"; 
    if (party === "IFP") return "bg-[#f97316] text-white"; 
    if (party === "FF+") return "bg-[#5CCC73] text-black"; 
    if (party === "PA") return "bg-[#9333ea] text-white"; 
    if (party === "PAC") return "bg-[#000000] text-white"; 
    if (party === "GOOD") return "bg-[#f59e0b] text-gray-900"; 
    return "bg-[#f3f4f6] text-[#4b5563]";
}

// Component receives a single 'official' object as a prop from App.jsx
// Renamed to MinisterCard for semantic clarity, using 'official' prop.
export function MinisterCard({ official }) {
  const partyColor = getPartyColor(official.party);

  return (
    <div className="minister-card bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-600 hover:shadow-xl transition duration-300">
      {/* Access data via 'official' prop */}
      <h2 className="text-2xl font-bold text-gray-900 mb-3">{official.name}</h2>
      <img className = "w-50 h-80 object-cover mb-2 mx-auto border-8 border-double" src={`./public/images/${official.id}.jpg`} alt={`Photo of ${official.name}`} />
      <p className="text-lg font-semibold text-black-700 mb-4">
        {official.office}
      </p>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-gray-700">
          <span className="font-medium w-24 text-sm text-gray-500">Party:</span>
          <span
            className={`text-sm font-semibold px-3 py-1 rounded-full ${partyColor}`}
          >
            {official.party}
          </span>
        </div>
        <div className="flex items-center text-gray-700">
          <span className="font-medium w-24 text-sm text-gray-500">
            Education:
          </span>
          <span className="text-sm font-normal text-gray-700">
            {official.qualification}
          </span>
        </div>
      </div>

      <div className="pt-4 border-t border-gray-100">
        <p className="text-base font-semibold text-gray-600 mb-2">
          Role Description:
        </p>
        <p className="text-gray-600 italic text-sm">{official.description}</p>
      </div>
    </div>
  );
}

export default MinisterCard;
