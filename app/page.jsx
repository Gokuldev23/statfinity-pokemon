import React from "react";
import Link from "next/link";

async function getPokemons() {
  let limit = 10;
  let offset = 0;
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
    {
      next: { revalidate: 0 }, // means static and no revalidation (pure SSG)
    }
  );
  return res.json();
}

export default async function Home() {
  let data = await getPokemons();
  let pokemons = data?.results || [];
  return (
    <div>
      <h1 className="text-center text-4xl font-bold">PokeMon</h1>
      <ul className="grid grid-cols-4 gap-5 my-8">
        {pokemons.map((pokemon, i) => {
          return (
            <li key={`${pokemon.name}${i + 1}`} className="">
              <Link
                href={`/pokemon/${i + 1}`}
                className="capitalize  text-2xl font-extrabold tracking-widest block text-shadow-2xs text-center p-10 background-placeholder rounded-2xl h-full"
              >
                {pokemon.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
