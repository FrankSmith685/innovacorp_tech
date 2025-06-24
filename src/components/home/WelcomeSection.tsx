"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomImage from "../ui/CustomImage";
import { welcomeData } from "./data/WelcomeText";
import CustomButton from "../ui/CustomButton";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

const WelcomeSection = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="relative w-full bg-gradient-to-br from-white to-indigo-50 py-16 px-4 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 items-center gap-12">
        {/* Imagen centrada y decorativa */}
        <motion.div
          className="md:col-span-5 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          custom={0}
        >
          <div className="relative w-full max-w-xl h-[300px] md:h-[700px] overflow-hidden">

            <CustomImage
              name="home_01"
              alt={welcomeData.imageAlt}
              width={700}
              height={1000}
              className="rounded-2xl shadow-xl object-cover w-full h-full"
            />
          </div>
        </motion.div>

        {/* Texto con bloques visuales */}
        <motion.div
          className="md:col-span-7 flex flex-col gap-6 text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeIn} custom={1}>
            <div className="flex justify-center md:justify-center mb-4">
              <CustomImage
                name="logo_01"
                alt={welcomeData.logoAlt}
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight tracking-tight max-w-2xl mx-auto md:mx-0">
              {welcomeData.title}
              <span className="block text-indigo-600 mt-2">
                {welcomeData.subtitle}
              </span>
            </h2>
          </motion.div>

          <motion.p
            className="text-gray-700 text-sm md:text-md leading-relaxed tracking-wide max-w-2xl mx-auto md:mx-0"
            variants={fadeIn}
            custom={2}
          >
            {welcomeData.introParagraphs[0]}
          </motion.p>
          <motion.div variants={fadeIn} custom={3}>
          <CustomButton
            variantType="indigo"
            onClick={() => setShowMore(!showMore)}
            className="self-center md:self-start !w-auto !rounded-2xl"
          >
            {showMore ? "Ver menos" : "Ver más"}
          </CustomButton>
        </motion.div>
          

          <AnimatePresence>
            {showMore && (
              <motion.div
                className="flex flex-col gap-6 mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-gray-700 text-sm leading-relaxed tracking-wide max-w-2xl mx-auto md:mx-0">
                  {welcomeData.introParagraphs[1]}
                </p>

                <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm max-w-2xl mx-auto md:mx-0">
                  <h3 className="text-indigo-700 text-sm font-semibold mb-3">
                    {welcomeData.featuresTitle}
                  </h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2 text-sm  leading-relaxed tracking-wide text-start">
                    {welcomeData.features.map((f, i) => (
                      <li key={i}>
                        <strong>{f.title}:</strong> {f.description}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-indigo-50 rounded-xl p-6 shadow-sm max-w-2xl mx-auto md:mx-0 ">
                  <p className="text-base font-semibold text-indigo-800 mb-2 leading-snug">
                    {welcomeData.ctaTitle}
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed tracking-wide text-sm">
                    {welcomeData.ctaDescription}
                  </p>
                  <CustomButton variantType="indigo" className="!w-auto !rounded-2xl">
                  {welcomeData.ctaButton}
                </CustomButton>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeSection;
