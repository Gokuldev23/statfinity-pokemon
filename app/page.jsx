import React from "react";

import { getPokemons } from "@/js/api";
import PokemonList from "@/components/PokemonList";

export default async function Home() {
  let limit = 100;
  let offset = 0;

  let result = await getPokemons(limit, offset);
  let pokemons = result?.results.map((vl,i)=>{
    return {...vl,id:i+1}
  }) || [];


  return (
    <div className="min-h-screen  py-8 px-4 bg-blue-500 rounded-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-yellow-400 mb-2 drop-shadow-lg">
            PokeMon
          </h1>
          <p className="text-xl text-white/80">
            Discover your favorite Pokémon
          </p>
        </div>
         
        <PokemonList list={pokemons}/>
      </div>
    </div>
  );
}
