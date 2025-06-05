"use client"
import React, { useEffect, useState } from 'react'
import PokeCard from './PokeCard';
import SearchBar from './SearchBar';

export default function PokemonList({list}) {

  let [searchVal,setSearchVal] = useState("")
  const [filteredPokemons, setFilteredPokemons] = useState(list);

  const handleFilter = (e) => {
        setSearchVal(e.target.value);
  }

  useEffect(() => {
    const filtered = list.filter((pokemon) =>
      pokemon.name.toLowerCase().startsWith(searchVal.toLowerCase())
    );
    setFilteredPokemons(filtered);
  }, [searchVal, list]);

  console.log({filteredPokemons})

  return (
    <>
      <SearchBar value={searchVal} onChange={handleFilter} />
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredPokemons.map((pokemon, i) => {
          return (
            <PokeCard key={pokemon.id} pokemon={pokemon} />
          );
        })}
      </ul>
    </>
  );
}
