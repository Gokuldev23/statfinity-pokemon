"use client";
import { getAPockemon } from "@/js/api";
import { useQuery } from "@tanstack/react-query";
import React, { Suspense } from "react";

export default function Pokemon({ id }) {
  const {
    data: pokemon,
    isLoading,
    error,
  } = useQuery({
    queryKey: [id],
    queryFn: async () => await getAPockemon(id),
    enabled: id >= 0 && id !== undefined,
  });

  if (isLoading) {
    return <div className="w-full h-dvh bg-gray-600 animate-pulse"></div>;
  }

  return (
    <>
      <main>
        <header>
          <p className="text-white text-xl">{pokemon.name}</p>
        </header>
      </main>
    </>
  );
}
