"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import CustomImage from "../ui/CustomImage";
import { footerData } from "./data/FooterData";

const Footer = () => {
  return (
    <footer className="bg-[#2f3848] text-white pt-12 pb-6 px-4 md:px-16">
      {/* Logo centrado arriba */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center text-center mb-10"
      >
        <CustomImage
          name="logo_02"
          alt="Logo de InnovaCorp"
          width={80}
          height={80}
          className="object-contain mb-2"
        />
      </motion.div>

      {/* Secciones del footer */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-sm"
      >
        {/* Información */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Información</h3>
          <ul className="space-y-2 text-gray-300">
            {footerData.informacion.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.href}
                  className="hover:text-white transition duration-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Servicios */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Nuestros Servicios</h3>
          <ul className="space-y-2 text-gray-300">
            {footerData.servicios.map((servicio, i) => (
              <li key={i}>{servicio}</li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contacto</h3>
          <ul className="space-y-2 text-gray-300">
            {footerData.contacto.map((item, i) => (
              <li key={i}>
                <span className="text-white font-medium">{item.label}</span>{" "}
                {item.value}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Línea final */}
      <div className="border-t border-gray-600 mt-12 pt-4 text-center text-xs text-gray-400">
        © 2024 Todos los derechos reservados
      </div>
    </footer>
  );
};

export default Footer;
