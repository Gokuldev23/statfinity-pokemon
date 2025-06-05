import Image from "next/image";
import React from "react";

export default function PokeHeader({ id, name, img }) {
  return (
    <div className="bg-gradient-to-r from-neutral-600 to-neutral-800 p-6 text-center relative">
      <h1 className="text-4xl font-bold text-white capitalize">{name}</h1>
      <p className="text-blue-100"># {id.toString().padStart(3, "0")}</p>

      <div className="flex justify-center -mb-16">
        <Image
          width={200}
          height={200}
          src={img}
          alt={name}
          className="w-64 h-64 object-contain transform hover:scale-110 transition-transform duration-300"
        />
      </div>
    </div>
  );
}
