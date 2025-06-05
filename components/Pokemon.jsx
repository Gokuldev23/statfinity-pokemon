import React from "react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { getAPockemon } from "@/js/api";
import PokeHeader from "./PokeHeader";
import PokeAbilities from "./PokeAbilities";
import PokStats from "./PokStats";
import PokeFeatures from "./PokeFeatures";

export default function Pokemon({ id }) {
  const {
    data: pokemon,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [id],
    queryFn: async () => await getAPockemon(id),
    enabled: id >= 0 && id !== undefined,
  });

  if (isLoading) {
    return <div className="w-full max-w-4xl mx-auto rounded-3xl h-dvh bg-gray-600 animate-pulse"></div>;
  }

  if (isLoading) {
    return (
      <div className="w-full h-dvh">
        <h1>Oops! Something Went wrong </h1>
        <Link href={"/"}>Go back</Link>
      </div>
    );
  }
  console.log({pokemon})
  return (
    <>
      <div className="min-h-screen  flex items-center justify-center p-4">
        <div className="w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl">
          <PokeHeader
            id={pokemon.id}
            name={pokemon.name}
            img={pokemon.sprites.other.dream_world.front_default}
            blurImg={pokemon.sprites.front_default}
          />
          <div className="pt-20 px-6 pb-6">
            <PokeFeatures type={pokemon.types[0].type} height={pokemon.height} weight={pokemon.weight} base_experience={pokemon.base_experience}/>
            <PokeAbilities abilities={pokemon.abilities} />
            <PokStats stats={pokemon.stats}/>
          </div>
        </div>
      </div>
    </>
  );
}
