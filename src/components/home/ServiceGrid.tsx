'use client';

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { servicesItems } from "./data/ServiceItem";

export default function ServicesGrid() {
  return (
    <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-px border border-white/10 bg-gradient-to-br from-black/50 to-black/30 text-white backdrop-blur-md rounded-xl overflow-hidden z-30">
      {servicesItems.map((service, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: idx * 0.1 }}
        >
          <Link
            href={service.href}
            className="flex flex-col justify-between gap-3 p-5 sm:p-6 hover:bg-white/10 transition-all duration-300 h-full"
          >
            <div className="flex justify-between items-center">
              <span className="font-semibold flex items-center gap-3 text-sm sm:text-base">
                <span className="text-sm sm:text-xl text-blue-400">{service.icon}</span>
                {service.label}
              </span>
              <FiArrowRight className="text-white text-xl" />
            </div>
            <motion.p
              className="hidden sm:block text-sm text-white/80 leading-snug"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.1 + 0.2 }}
            >
              {service.description}
            </motion.p>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
