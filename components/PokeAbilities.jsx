import React from "react";

export default function PokeAbilities({ abilities }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-3 text-gray-800">Abilities</h2>
      <div className="flex gap-2">
        {abilities.map((ability, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm capitalize"
          >
            {ability.ability.name}
          </span>
        ))}
      </div>
    </div>
  );
}
