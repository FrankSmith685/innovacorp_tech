'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import CustomButton from '@/components/ui/CustomButton';
import { contactanosIntro } from './data/contactanos';
import CustomInput from '../ui/CustomInput';
import CustomSelect from '../ui/CustomSelect';
import { SelectChangeEvent } from '@mui/material';

const sectionFade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' } as const,
  }),
};

export default function ContactanosOverview() {
  const [form, setForm] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    servicio: '',
    mensaje: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSelectChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleManualSubmit = async () => {
    try {
      console.log('Enviando datos:', form);

      const response = await fetch('/api/contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el formulario');
      }

      const result = await response.json();
      console.log('Respuesta del servidor:', result);

      setForm({
        nombre: '',
        correo: '',
        telefono: '',
        servicio: '',
        mensaje: '',
      });

      alert('Formulario enviado exitosamente');
    } catch (error) {
      console.error('Error al enviar:', error);
      alert('Hubo un error al enviar el formulario.');
    }
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-12 py-12 space-y-20 bg-white text-gray-800">
      {/* Intro */}
      <motion.section
        className="text-center max-w-4xl mx-auto space-y-4 px-2"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed whitespace-pre-line">
          {contactanosIntro}
        </p>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="max-w-3xl mx-auto space-y-6 px-4"
        initial="hidden"
        whileInView="visible"
        variants={sectionFade}
        viewport={{ once: true }}
      >
        <h2 className="text-xl font-semibold text-center text-indigo-700">Solicita más información</h2>

        <div className="space-y-5">
          <CustomInput
            name="nombre"
            label="Nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Ingresa tu nombre"
            required
          />

          <CustomInput
            name="correo"
            label="Correo electrónico"
            value={form.correo}
            onChange={handleChange}
            placeholder="ejemplo@correo.com"
            required
          />

          <CustomInput
            name="telefono"
            label="Teléfono (opcional)"
            value={form.telefono}
            onChange={handleChange}
            placeholder="+51 999 999 999"
          />    
            <div>
                <CustomSelect
                    name="servicio"
                    label="Selecciona un servicio"
                    value={form.servicio}
                    onChange={handleSelectChange}
                    options={[
                    { label: 'Consultoría tecnológica', value: 'Consultoría tecnológica' },
                    { label: 'Desarrollo de software personalizado', value: 'Desarrollo de software personalizado' },
                    { label: 'Implementación de sistemas', value: 'Implementación de sistemas' },
                    { label: 'Inteligencia artificial y machine learning', value: 'Inteligencia artificial y machine learning' },
                    ]}
                    customColor="indigo"
                />
            </div>

          <CustomInput
            name="mensaje"
            label="Mensaje"
            placeholder="Cuéntanos más sobre lo que necesitas"
            value={form.mensaje}
            onChange={handleChange}
            multiline
            minRows={4}
          />

          <div className="flex justify-center">
            <CustomButton
              variantType="indigo"
              type="button"
              onClick={handleManualSubmit}
              className="!rounded-xl px-6"
            >
              Enviar
            </CustomButton>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
