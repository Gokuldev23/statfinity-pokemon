import Image from "next/image";
import React, { useState } from "react";

export default function PokeHeader({ id, name, img ,blurImg}) {

  let [isLoaded,setIsLoaded] = useState(false)

  return (
    <div className="bg-gradient-to-r from-neutral-600 to-neutral-800 p-6 text-center relative">
      <h1 className="text-4xl font-bold text-white capitalize">{name}</h1>
      <p className="text-blue-100"># {id.toString().padStart(3, "0")}</p>

      <div className="flex justify-center -mb-16">
        <div className={`w-50 h-50 rounded-2xl ${isLoaded?"bg-transparent animate-none":"bg-gray-500/25 animate-pulse"}`}>
          <Image
            width={200}
            height={200}
            src={img}
            alt={name}
            blurDataURL="/pokemon-placeholder.png"
            onLoadingComplete={() => setIsLoaded(true)}
            className={`w-64 h-64 object-contain transform hover:scale-110 transition-all duration-300 ${isLoaded?"opacity-100":"opacity-0"}`}
          />
        </div>
      </div>
    </div>
  );
}
