"use client"
import React, { useEffect, useState } from 'react'
import PokeCard from './PokeCard';
import SearchBar from './SearchBar';

export default function PokemonList({list}) {

  const LIMIT = 20
  const [currPage,setCurrPage] = useState(1)
  const [searchVal,setSearchVal] = useState("")
  const [filteredPokemons, setFilteredPokemons] = useState(list);

  const totalPages = list?.length / LIMIT
  const startIndex = (currPage - 1) * LIMIT;
  const endIndex = startIndex + LIMIT;
  const currentPokemons = filteredPokemons.slice(startIndex, endIndex);

  const handleFilter = (e) => {
      setSearchVal(e.target.value);
  }

  useEffect(() => {
    const filtered = list.filter((pokemon) =>
      pokemon.name.toLowerCase().startsWith(searchVal.toLowerCase())
    )
    setFilteredPokemons(filtered);
  }, [searchVal, list]);


  const goNext = () => {
      setCurrPage((prev)=>prev+=1)
  }

  const goBack = () => {
    setCurrPage((prev) => (prev -= 1));
  };
 

  return (
    <>
      <SearchBar value={searchVal} onChange={handleFilter} />
      <div className="flex gap-5 items-center justify-center my-10">
        <button
          disabled={currPage == 1}
          onClick={goBack}
          className="px-4 py-1 rounded-2xl bg-black text-white  disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Back
        </button>
        <p>
        {currPage} / {totalPages}
        </p>
        <button
          disabled={currPage == totalPages}
          onClick={goNext}
          className="px-4 py-1 rounded-2xl bg-black text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {currentPokemons.map((pokemon, i) => {
          return <PokeCard key={pokemon.id} pokemon={pokemon} />;
        })}
      </ul>
    </>
  );
}
