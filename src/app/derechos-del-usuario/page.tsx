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

export default function DerechosUsuarioSection() {
  return (
    <section className="w-full bg-gradient-to-br from-white to-indigo-50 py-28 px-4">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full flex flex-col items-center text-center gap-6"
        >
          {/* Logo */}
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
            Derechos del Usuario
            <span className="block text-indigo-600 mt-2">Protegemos tu información</span>
          </motion.h2>

          {/* Intro */}
          <motion.p
            className="text-gray-700 text-sm md:text-base leading-relaxed tracking-wide"
            variants={fadeIn}
            custom={2}
          >
            Aquí encontrarás toda la información relevante sobre tus derechos como usuario.
          </motion.p>

          {/* Información de contacto */}
          <motion.div
            className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm w-full"
            variants={fadeIn}
            custom={3}
          >
            <h3 className="text-indigo-700 text-sm font-semibold mb-3">Información de contacto</h3>
            <ul className="text-sm text-gray-700 leading-relaxed space-y-2 text-left">
              <li><strong>Nombre de la empresa:</strong> Innova Corp</li>
              <li><strong>Dirección:</strong> Calle Bellavista 325, Miraflores Of. 202</li>
              <li><strong>Correo electrónico:</strong> contacto@innovacorp.tech</li>
            </ul>
          </motion.div>

          {/* Derechos del usuario */}
          <motion.div
            className="bg-indigo-50 rounded-xl p-6 shadow-sm w-full"
            variants={fadeIn}
            custom={4}
          >
            <h3 className="text-indigo-800 text-base font-semibold mb-2">Tus derechos</h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2 text-left">
              <li><strong>Acceso:</strong> Puedes saber qué datos tenemos sobre ti y cómo los usamos.</li>
              <li><strong>Rectificación:</strong> Puedes solicitar la corrección de tus datos si son inexactos.</li>
              <li><strong>Eliminación:</strong> Puedes pedir que eliminemos tus datos si ya no son necesarios.</li>
              <li><strong>Limitación y portabilidad:</strong> Puedes solicitar el traslado o restricción del uso de tus datos.</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
