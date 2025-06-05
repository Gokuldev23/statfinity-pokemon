import React from "react";

export default function PokStats({ stats }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-3 text-gray-800">Base Stats</h2>
      <div className="space-y-2">
        {stats.map((stat, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm mb-1">
              <span className="capitalize text-gray-600">{stat.stat.name}</span>
              <span
                className={`font-bold ${
                  stat.base_stat < 50 ? "text-gray-500" : "text-blue-500"
                }`}
              >
                {stat.base_stat}
              </span>
            </div>
            <input
              min={0}
              readOnly
              max={100}
              value={stat.base_stat}
              className="w-full"
              type="range"
              name="range-meter"
              id=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}
