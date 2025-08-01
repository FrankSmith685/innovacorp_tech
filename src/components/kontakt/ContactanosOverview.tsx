'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import CustomButton from '@/components/ui/CustomButton';
import CustomInput from '../ui/CustomInput';
import { contactanosIntro } from './data/contactanos';
import CustomCheck from '../ui/CustomCheck';
import CustomFileUpload from '../ui/CustomFileUpload';

const sectionFade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' } as const,
  }),
};

export default function ContactanosOverview() {
  const [selectedTab, setSelectedTab] = useState<'empresa' | 'solicitante'>('empresa');
  const [acceptPolicy, setAcceptPolicy] = useState(false);
  const [acceptRights, setAcceptRights] = useState(false);

  const [empresaForm, setEmpresaForm] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    empresa: '',
    ciudad: '',
    posicion: '',
    correo: '',
    mensaje: '',
  });

  const [solicitanteForm, setSolicitanteForm] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    mensaje: '',
  });

  const handleChangeEmpresa = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEmpresaForm({ ...empresaForm, [name]: value });
  };

  const handleChangeSolicitante = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSolicitanteForm({ ...solicitanteForm, [name]: value });
  };

  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async () => {
    if (!acceptPolicy || !acceptRights) {
      alert("Sie müssen beide Bedingungen akzeptieren.");
      return;
    }

    try {
      let response;

      if (selectedTab === 'solicitante') {
        const formData = new FormData();

        Object.entries(solicitanteForm).forEach(([key, value]) => {
          formData.append(key, value);
        });

        if (file) {
          formData.append('documento', file);
        }

        response = await fetch('/api/contacto/solicitante', {
          method: 'POST',
          body: formData,
        });

      } else {
        response = await fetch('/api/contacto/empresa', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(empresaForm),
        });
      }

      if (!response.ok) throw new Error('Fehler beim Senden des Formulars');

      const result = await response.json();
      console.log('Serverantwort:', result);

      // Reset
      if (selectedTab === 'empresa') {
        setEmpresaForm({
          nombre: '',
          apellido: '',
          telefono: '',
          empresa: '',
          ciudad: '',
          posicion: '',
          correo: '',
          mensaje: '',
        });
      } else {
        setSolicitanteForm({
          nombre: '',
          apellido: '',
          correo: '',
          telefono: '',
          mensaje: '',
        });
        setFile(null);
      }

      setAcceptPolicy(false);
      setAcceptRights(false);

      alert('Formular erfolgreich gesendet.');
    } catch (error) {
      console.error('Fehler beim Senden:', error);
      alert('Beim Senden des Formulars ist ein Fehler aufgetreten.');
    }
  };

  const handleFileSelect = (selectedFile: File | null) => {
    setFile(selectedFile);
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

      {/* Tabs */}
      <div className="flex justify-center gap-2">
        <CustomButton
          variantType={selectedTab == "empresa" ? 'indigo' : 'indigo-outline'}
          type="button"
          onClick={() => setSelectedTab('empresa')}
          className="!rounded-xl px-6"
          fullWidth={false}
        >
          ICH BIN EIN UNTERNEHMEN
        </CustomButton>
        <CustomButton
          variantType={selectedTab == "solicitante" ? 'indigo' : 'indigo-outline'}
          type="button"
          onClick={() => setSelectedTab('solicitante')}
          className="!rounded-xl px-6"
          fullWidth={false}
        >
          ICH BIN EIN BEWERBER
        </CustomButton>
      </div>

      {/* Formular */}
      <motion.section
        className="max-w-3xl mx-auto space-y-6 px-4"
        initial="hidden"
        whileInView="visible"
        variants={sectionFade}
        viewport={{ once: true }}
      >
        {selectedTab === 'empresa' ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <CustomInput name="nombre" label="Vorname" value={empresaForm.nombre} onChange={handleChangeEmpresa} required />
              <CustomInput name="apellido" label="Nachname" value={empresaForm.apellido} onChange={handleChangeEmpresa} required />
              <CustomInput name="telefono" label="Telefon" value={empresaForm.telefono} onChange={handleChangeEmpresa} />
              <CustomInput name="empresa" label="Unternehmen" value={empresaForm.empresa} onChange={handleChangeEmpresa} />
              <CustomInput name="ciudad" label="Stadt" value={empresaForm.ciudad} onChange={handleChangeEmpresa} />
              <CustomInput name="posicion" label="Position" value={empresaForm.posicion} onChange={handleChangeEmpresa} />
            </div>
            <CustomInput name="correo" label="E-Mail" value={empresaForm.correo} onChange={handleChangeEmpresa} required />
            <CustomInput
              name="mensaje"
              label="Nachricht (optional)"
              multiline
              minRows={4}
              value={empresaForm.mensaje}
              onChange={handleChangeEmpresa}
            />
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <CustomInput name="nombre" label="Vorname" value={solicitanteForm.nombre} onChange={handleChangeSolicitante} required />
              <CustomInput name="apellido" label="Nachname" value={solicitanteForm.apellido} onChange={handleChangeSolicitante} required />
            </div>
            <CustomInput name="correo" label="E-Mail" value={solicitanteForm.correo} onChange={handleChangeSolicitante} required />
            <CustomInput name="telefono" label="Telefon (optional)" value={solicitanteForm.telefono} onChange={handleChangeSolicitante} />
            <CustomInput
              name="mensaje"
              label="Nachricht"
              multiline
              minRows={4}
              value={solicitanteForm.mensaje}
              onChange={handleChangeSolicitante}
            />
            <CustomFileUpload
              onFileSelect={handleFileSelect}
              fileName={file?.name}
            />
          </>
        )}

        <div className="flex items-start flex-col gap-4 text-sm">
          <CustomCheck
            label="Ich akzeptiere die Datenschutzrichtlinie"
            checked={acceptPolicy}
            onChange={(e) => setAcceptPolicy(e.target.checked)}
          />
          <CustomCheck
            label="Ich akzeptiere die Benutzerrechte"
            checked={acceptRights}
            onChange={(e) => setAcceptRights(e.target.checked)}
          />
        </div>

        <div className="flex justify-center">
          <CustomButton
            variantType="indigo"
            type="button"
            onClick={handleSubmit}
            className="!rounded-xl px-6"
          >
            Senden
          </CustomButton>
        </div>
      </motion.section>
    </div>
  );
}

