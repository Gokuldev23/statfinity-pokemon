import React from 'react'

export default function SearchBar({value,onChange}) {
  return (
    <div className='max-w-sm mx-auto'>
      <input
        placeholder="Search Pokemons..."
        className="h-10 w-full bg-white text-slate-800  rounded-full border border-black block px-4"
        type="search"
        name="search"
        id="search"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
