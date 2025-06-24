'use client';

import { motion } from 'framer-motion';
import CustomImage from '@/components/ui/CustomImage';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

export default function PoliticaPrivacidadSection() {
  return (
    <section className="w-full bg-gradient-to-br from-white to-indigo-50 py-28 px-4">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
        {/* Logo */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full flex flex-col items-center text-center gap-6"
        >
          <motion.div variants={fadeIn} custom={0}>
            <CustomImage
              name="logo_01"
              alt="Logo Innova Corp"
              width={100}
              height={100}
              className="object-contain"
            />
          </motion.div>

          {/* Título */}
          <motion.h2
            className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight"
            variants={fadeIn}
            custom={1}
          >
            Política de Privacidad
            <span className="block text-indigo-600 mt-2">
              Tu información está segura con nosotros
            </span>
          </motion.h2>

          {/* Intro */}
          <motion.p
            className="text-gray-700 text-sm md:text-base leading-relaxed tracking-wide"
            variants={fadeIn}
            custom={2}
          >
            En Innovacorp, nos comprometemos a proteger la privacidad y los datos personales de nuestros usuarios. Esta Política de Privacidad describe cómo recopilamos, usamos y protegemos su información cuando utiliza nuestros servicios.
          </motion.p>

          {/* Información que recopilamos */}
          <motion.div
            className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm w-full"
            variants={fadeIn}
            custom={3}
          >
            <h3 className="text-indigo-700 text-sm font-semibold mb-3">Información que Recopilamos</h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2 text-left">
              <li>Datos personales proporcionados voluntariamente, como nombre, correo electrónico y teléfono.</li>
              <li>Información de uso, como las páginas visitadas y la duración de la visita.</li>
              <li>Datos técnicos, incluyendo dirección IP, tipo de navegador y dispositivo.</li>
              <li>Cookies y tecnologías de seguimiento para mejorar su experiencia en nuestro sitio web.</li>
            </ul>
          </motion.div>

          {/* Uso y Protección */}
          <motion.div
            className="bg-indigo-50 rounded-xl p-6 shadow-sm w-full"
            variants={fadeIn}
            custom={4}
          >
            <h3 className="text-indigo-800 text-base font-semibold mb-2">Uso y Protección de la Información</h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2 text-left">
              <li>Mejorar nuestros servicios y desarrollar nuevas funciones.</li>
              <li>Proporcionar soporte al cliente y responder a consultas.</li>
              <li>Implementar medidas de seguridad para proteger sus datos contra accesos no autorizados.</li>
              <li>Cumplir con obligaciones legales y normativas aplicables.</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
