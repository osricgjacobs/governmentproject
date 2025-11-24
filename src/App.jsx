import React, { useState, useMemo } from "react";
import { officialsData } from "./components/data";
import MinisterCard from "./components/cards";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter logic is memoized to efficiently filter the list
  const filteredOfficials = useMemo(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    if (!lowerCaseSearchTerm) {
      return officialsData;
    }

    return officialsData.filter(
      (official) =>
        official.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        official.office.toLowerCase().includes(lowerCaseSearchTerm) ||
        official.party.toLowerCase().includes(lowerCaseSearchTerm) ||
        official.qualification.toLowerCase().includes(lowerCaseSearchTerm) ||
        official.description.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-['Inter',_sans-serif]">
      <header className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
          South African Government Directory
        </h1>
        <p className="text-xl text-gray-500">
          Cabinet Ministers and Key Leadership (Current GNU Cabinet)
        </p>
      </header>

      <div className="max-w-4xl mx-auto mb-8">
        <input
          type="text"
          id="search-input"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search by name, party, or portfolio..."
          className="w-full p-4 border border-gray-300 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
        />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredOfficials.length > 0 ? (
          filteredOfficials.map((official) => (
            <MinisterCard key={official.name} official={official} />
          ))
        ) : (
          <p className="text-center col-span-full text-xl text-gray-500 mt-10">
            No officials found matching your search criteria.
          </p>
        )}
      </div>

      <footer className="bg-[var(--sa-white)] text-gray-600 rounded-lg shadow-lg border-t-4 border-[var(--sa-gold)] p-6 md:p-8 mt-12 mx-4 md:mx-auto max-w-6xl text-center">
        <p className="mb-2 text-sm">Created by Osric Jacobs.</p>
        <p className="text-xs">
          All images sourced from the{" "}
          <a
            href="https://www.parliament.gov.za/ministers"
            className="text-[var(--sa-blue)] hover:text-[var(--sa-green)] font-semibold transition duration-200"
          >
            Parliment Official Website
          </a>
          .
        </p>
      </footer>
    </div>
  );
}

export default App;
