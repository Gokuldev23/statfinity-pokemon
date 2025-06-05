"use client";
import React from "react";
import { useParams } from "next/navigation";

import QueryClient from "@/components/QuerClient";
import Pokemon from "@/components/Pokemon";

export default function Page() {
  let { id } = useParams();

  return (
    <QueryClient>
      <Pokemon id={id} />
    </QueryClient>
  );
}
