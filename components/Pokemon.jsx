"use client";
import { getAPockemon } from "@/js/api";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import PokeHeader from "./PokeHeader";
import PokeAbilities from "./PokeAbilities";

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
    return <div className="w-full h-dvh bg-gray-600 animate-pulse"></div>;
  }

  if (isLoading) {
    return (
      <div className="w-full h-dvh">
        <h1>Oops! Something Went wrong </h1>
        <Link href={"/"}>Go back</Link>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen  flex items-center justify-center p-4">
        <div className="w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl">
          <PokeHeader
            id={pokemon.id}
            name={pokemon.name}
            img={pokemon.sprites.other.dream_world.front_default}
          />
          <div className="pt-20 px-6 pb-6">
            <div className="flex justify-center mb-6">
              <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold capitalize">
                {pokemon.types[0].type.name}
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6 *:border *:border-slate-600 *:text-center *:rounded-xl *:p-4">
              <div className="">
                <p className="text-gray-500 text-sm">Height</p>
                <p className="font-bold text-slate-500">
                  {pokemon.height / 10} m
                </p>
              </div>
              <div className="">
                <p className="text-gray-500 text-sm">Weight</p>
                <p className="font-bold text-slate-500">
                  {pokemon.weight / 10} kg
                </p>
              </div>
              <div className="">
                <p className="text-gray-500 text-sm">Base Exp</p>
                <p className="font-bold text-slate-500">
                  {pokemon.base_experience}
                </p>
              </div>
            </div>
            <PokeAbilities abilities={pokemon.abilities} />
            <div>
              <h2 className="text-xl font-bold mb-3 text-gray-800">
                Base Stats
              </h2>
              <div className="space-y-2">
                {pokemon.stats.map((stat, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="capitalize text-gray-600">
                        {stat.stat.name}
                      </span>
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
          </div>
          <div className="bg-gray-50 p-4 text-center">
            <p className="text-gray-500 text-sm">
              The final evolution of Squirtle
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
