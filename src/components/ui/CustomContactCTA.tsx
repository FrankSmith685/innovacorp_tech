"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import CustomButton from "../ui/CustomButton"; // ajusta la ruta si es diferente

const ContactCTA = () => {
  const router = useRouter();

  return (
    <div className="bg-white py-20 px-4 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6"
      >
        ¿DESEAS MÁS INFORMACIÓN?
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <CustomButton
          variantType="indigo"
          onClick={() => router.push("/contactanos")}
          className="self-center md:self-start !w-auto !rounded-2xl"
        >
          Contáctanos
        </CustomButton>
      </motion.div>
    </div>
  );
};

export default ContactCTA;
