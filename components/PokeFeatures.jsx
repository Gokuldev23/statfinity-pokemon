import React from 'react'

export default function PokeFeatures({type,height,weight,base_experience}) {
  return (
    <>
    <div className="flex justify-center mb-6">
        <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold capitalize">
        {type?.name}
        </span>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6 *:border *:border-slate-600 *:text-center *:rounded-xl *:p-4">
      <div className="">
        <p className="text-gray-500 text-sm">Height</p>
        <p className="font-bold text-slate-500">{height / 10} m</p>
      </div>
      <div className="">
        <p className="text-gray-500 text-sm">Weight</p>
        <p className="font-bold text-slate-500">{weight / 10} kg</p>
      </div>
      <div className="">
        <p className="text-gray-500 text-sm">Base Exp</p>
        <p className="font-bold text-slate-500">{base_experience}</p>
      </div>
    </div>
    </>
  );
}
