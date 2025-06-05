import Image from "next/image";
import React, { useState } from "react";

const BackArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
      />
    </svg>
  );
};

export default function PokeHeader({ id, name, img }) {
  let [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-800 p-6 text-center relative">
      <button
        className="bg-black/50 text-white rounded-2xl px-4 py-1 cursor-pointer absolute left-6 top-6 flex gap-2 items-center "
        onClick={() => history.back()}
      >
        <BackArrow />
        Back{" "}
      </button>

      <h1 className="text-4xl font-bold text-white capitalize">{name}</h1>
      <p className="text-blue-100"># {id.toString().padStart(3, "0")}</p>

      <div className="flex justify-center -mb-16">
        <div
          className={`w-50 h-50 rounded-2xl ${
            isLoaded
              ? "bg-transparent animate-none"
              : "bg-gray-500/25 animate-pulse"
          }`}
        >
          <Image
            width={200}
            height={200}
            src={img}
            alt={name}
            onLoadingComplete={() => setIsLoaded(true)}
            className={`object-contain hover:scale-110 transition-all duration-300 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
    </div>
  );
}
