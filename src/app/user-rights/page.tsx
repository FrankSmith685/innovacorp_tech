'use client';

import { motion } from 'framer-motion';
import { legalDataEn } from './data/legalData';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

export default function UserRightsSection() {
  const {
    titles,
    company,
    chamber,
    authority,
    dataProtection,
    termsAndConditions,
    imageRights,
    textRights,
  } = legalDataEn;

  return (
    <section className="w-full bg-gradient-to-br from-white to-indigo-50 pt-[140px] pb-24 px-4">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
        {/* Main Title */}
        <motion.h2
          className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          custom={0}
        >
          {titles.section}
          <span className="block text-indigo-600 mt-2">{titles.subtitle}</span>
        </motion.h2>

        <motion.p
          className="text-gray-700 text-sm md:text-base leading-relaxed tracking-wide"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          custom={1}
        >
          {titles.description}
        </motion.p>

        {/* Info Blocks */}
        {[{
          title: titles.serviceProviderTitle,
          content: (
            <ul className="text-sm text-gray-700 leading-relaxed space-y-2">
              <li><strong>Name:</strong> {company.person}</li>
              <li><strong>Company:</strong> {company.name}</li>
              <li><strong>Address:</strong> {company.address}</li>
              <li><strong>Phone:</strong> {company.phone}</li>
              <li><strong>Email:</strong> {company.email}</li>
              <li><strong>Tax ID:</strong> {company.taxId}</li>
              <li><strong>Job Title:</strong> {company.jobTitle}</li>
              <li><strong>Country:</strong> {company.country}</li>
            </ul>
          )
        }, {
          title: titles.chamberTitle,
          content: (
            <ul className="text-sm text-gray-700 leading-relaxed space-y-2">
              <li><strong>Chamber:</strong> {chamber.name}, {chamber.address}</li>
              <li><strong>Website:</strong> <a href={chamber.website} className="text-indigo-600 underline">{chamber.website}</a></li>
              <li><strong>Supervisory Authority:</strong> {authority.name}, {authority.address}</li>
              <li><strong>Website:</strong> <a href={authority.website} className="text-indigo-600 underline">{authority.website}</a></li>
            </ul>
          )
        }, {
          title: titles.dataProtectionTitle,
          content: (
            <ul className="text-sm text-gray-700 leading-relaxed space-y-2">
              <li><strong>Responsible:</strong> {dataProtection.responsible}</li>
              <li><strong>Email:</strong> {dataProtection.email}</li>
              <li><strong>Phone:</strong> {dataProtection.phone}</li>
              <li><strong>Legal Notice:</strong> <a href={dataProtection.legalNotice} className="text-indigo-600 underline">{dataProtection.legalNotice}</a></li>
            </ul>
          )
        }, {
          title: titles.termsTitle,
          content: (
            <a href={termsAndConditions.link} className="text-indigo-600 underline text-sm">
              {termsAndConditions.link}
            </a>
          )
        }, {
          title: titles.imageRightsTitle,
          content: (
            <>
              <p className="text-sm text-gray-700 mb-2">{imageRights.note}</p>
              <p className="text-sm text-gray-700"><strong>Image Rights:</strong> {imageRights.owner}</p>
              <p className="text-sm text-gray-700 mt-2">{textRights.note}</p>
            </>
          )
        }].map((block, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm w-full text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            custom={i + 2}
          >
            <h3 className="text-indigo-700 text-sm font-semibold mb-3">{block.title}</h3>
            {block.content}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
