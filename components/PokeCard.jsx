import React from 'react'
import Link from 'next/link';
import { getBgImgUrl } from '@/js/api';


export default function PokeCard({pokemon}) {
  const pokemonId = pokemon.id;
  return (
    <li
      className="group relative rounded-xl overflow-hidden shadow-2xl hover:shadow-yellow-400/30 transition-all duration-300 hover:-translate-y-2 hover:scale-105"
    >
      <div
        className="absolute inset-0 bg-center bg-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
        style={{
          backgroundImage: `url(${getBgImgUrl(pokemonId)})`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

      <Link
        href={`/pokemon/${pokemonId}`}
        className="relative block h-full min-h-[200px]  flex-col justify-end p-6"
      >
        <span className="text-white/70 text-sm font-mono">
          #{String(pokemonId).padStart(3, "0")}
        </span>
        <h2 className="text-2xl font-bold text-white capitalize mb-2">
          {pokemon.name}
        </h2>
        <div className="w-full h-1 bg-yellow-400 mb-2 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

        <button className="self-end mt-4 px-4 py-2 bg-yellow-400 text-black rounded-full text-sm font-bold hover:bg-white transition-colors duration-200 flex items-center">
          View Details
        </button>
      </Link>
    </li>
  );
}
