import React from 'react'

export default function PokStats({stats}) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-3 text-gray-800">Base Stats</h2>
      <div className="space-y-2">
        {stats.map((stat, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm mb-1">
              <span className="capitalize text-gray-600">{stat.stat.name}</span>
              <span className="font-bold">{stat.base_stat}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: `${Math.min(100, stat.base_stat)}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
