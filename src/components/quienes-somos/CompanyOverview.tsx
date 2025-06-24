'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  companyIntro,
  mission,
  vision,
  values,
  team,
  whyUs,
  sectionTitles,
} from './data/company';
import {
  FaLightbulb,
  FaUsers,
  FaRocket,
  FaCogs,
  FaLeaf,
} from 'react-icons/fa';
import CustomImage from '../ui/CustomImage';

const sectionFade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' } as const,
  }),
};

export default function CompanyOverview() {
  const icons = [FaLightbulb, FaCogs, FaUsers, FaRocket, FaLeaf];

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
  }, []);

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
          {companyIntro}
        </p>
      </motion.section>

      {/* Misión y Visión */}
      <motion.section
        id="historia"
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        initial="hidden"
        whileInView="visible"
        variants={sectionFade}
        viewport={{ once: true }}
      >
        {[sectionTitles.mission, sectionTitles.vision].map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-blue-50 border border-blue-100 p-5 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            custom={idx}
            variants={sectionFade}
          >
            <div className="flex items-center gap-2 mb-2 text-blue-700">
              <item.icon className="text-xl" />
              <h3 className="text-lg sm:text-xl font-semibold">{item.title}</h3>
            </div>
            <p className="text-gray-700 whitespace-pre-line text-sm sm:text-base">
              {idx === 0 ? mission : vision}
            </p>
          </motion.div>
        ))}
      </motion.section>

      {/* Valores */}
      <section>
        <motion.h3
          className="text-xl sm:text-2xl font-bold mb-6 text-center text-blue-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {sectionTitles.values}
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {values.map((value, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={i}
                className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-lg transition cursor-default"
                custom={i}
                initial="hidden"
                whileInView="visible"
                variants={sectionFade}
                viewport={{ once: true }}
              >
                <Icon className="text-blue-500 text-2xl sm:text-3xl mb-3" />
                <h4 className="text-base sm:text-lg font-semibold text-gray-800">{value.title}</h4>
                <p className="text-gray-600 text-sm mt-2">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Nuestro Equipo */}
      <section id="equipo">
        <motion.h3
          className="text-xl sm:text-2xl font-bold mb-6 text-center text-blue-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {sectionTitles.team}
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((person, i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-tr from-blue-50 to-white border border-blue-100 p-4 rounded-xl shadow-sm hover:shadow-blue-200 transition-all"
              custom={i}
              initial="hidden"
              whileInView="visible"
              variants={sectionFade}
              viewport={{ once: true }}
            >
              <div className="relative w-full flex items-center justify-center h-36 rounded-xl overflow-hidden mb-4 bg-gray-100 shadow-inner">
                <CustomImage
                  name={person.photo}
                  alt={person.name}
                  height={300}
                  className={`${person.photo === 'team_01' ? 'h-36' : 'h-40'} w-[100px] rounded-full object-cover transition-transform duration-500 ease-in-out hover:scale-105`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none rounded-xl" />
              </div>

              <h4 className="text-base sm:text-lg font-semibold text-gray-800">{person.name}</h4>
              <p className="text-blue-600 text-sm mb-2">{person.title}</p>
              <p className="text-gray-600 text-sm">{person.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ¿Por qué elegirnos? */}
      <motion.section
        className="bg-blue-100 text-blue-900 p-6 sm:p-8 rounded-xl text-center shadow-lg"
        initial="hidden"
        whileInView="visible"
        variants={sectionFade}
        viewport={{ once: true }}
      >
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
          {sectionTitles.whyUs}
        </h3>
        <p className="text-base sm:text-lg max-w-3xl mx-auto font-medium whitespace-pre-line">
          {whyUs}
        </p>
      </motion.section>
    </div>
  );
}
