"use client";

import { FaBolt } from "react-icons/fa";

export default function CustomLoader() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white relative overflow-hidden">

      {/* Círculo animado de fondo */}
      <div className="absolute w-72 h-72 bg-blue-500 opacity-20 rounded-full animate-ping blur-2xl" />

      {/* Ícono giratorio */}
      <div className="z-10 mb-6 animate-spin">
        <FaBolt className="text-yellow-400 text-6xl" />
      </div>

      {/* Texto atractivo */}
      <p className="z-10 text-lg md:text-xl font-semibold tracking-wide text-blue-200 animate-pulse">
        Cargando Innovacorp...
      </p>
    </div>
  );
}
