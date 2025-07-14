'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { registreCurriculumIntro } from './data/registreCurriculum';
import CustomInput from '@/components/ui/CustomInput';
import CustomFileUpload from '@/components/ui/CustomFileUpload';
import CustomButton from '@/components/ui/CustomButton';

const sectionFade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' } as const,
  }),
};

export default function RegistreCurriculumOverview() {
  const [form, setForm] = useState({ correo: '', mensaje: '' });
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileSelect = (selectedFile: File | null) => {
    setFile(selectedFile);
  };

  const handleManualSubmit = async () => {
    if (!form.correo || !form.mensaje || !file) {
      alert('Bitte fülle alle Felder aus und lade deine Datei hoch.');
      return;
    }

    const formData = new FormData();
    formData.append('correo', form.correo);
    formData.append('mensaje', form.mensaje);
    formData.append('file', file);

    try {
      const res = await fetch('/api/registro-curriculum', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        alert('E-Mail erfolgreich gesendet.');
        setForm({ correo: '', mensaje: '' });
        setFile(null);
      } else {
        alert(data.error || 'Fehler beim Senden der E-Mail');
      }
    } catch (error) {
      console.error(error);
      alert('Unerwarteter Fehler beim Senden des Formulars');
    }
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-12 py-12 space-y-12 bg-white text-gray-800">
      <motion.section
        className="text-center max-w-4xl mx-auto space-y-6 px-2"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed whitespace-pre-line">
          {registreCurriculumIntro}
        </p>
      </motion.section>

      <div className="max-w-3xl mx-auto space-y-6">
        <CustomInput
          name="correo"
          label="E-Mail"
          value={form.correo}
          onChange={handleChange}
          placeholder="beispiel@email.com"
          required
        />
        <CustomInput
          name="mensaje"
          label="Nachricht (Optional)"
          placeholder="Erzählen Sie uns mehr über Ihre Anforderungen"
          value={form.mensaje}
          onChange={handleChange}
          multiline
          minRows={4}
        />
        <CustomFileUpload
          onFileSelect={handleFileSelect}
          fileName={file?.name}
        />
        <div className="pt-4">
          <CustomButton
            variantType="indigo"
            type="button"
            onClick={handleManualSubmit}
            className="!rounded-xl px-6"
          >
            Senden
          </CustomButton>
        </div>
      </div>
    </div>
  );
}
