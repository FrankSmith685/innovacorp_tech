'use client';

import Link from 'next/link';
import CustomImage from '@/components/ui/CustomImage';

export default function Logo({ isActive }: { isActive: boolean }) {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <CustomImage
        name={isActive ? 'logo_01' : 'logo_02'}
        alt="Logo de MiEmpresa"
        width={100}
        height={100}
        className="object-contain transition-all duration-300 cursor-pointer"
      />
    </Link>
  );
}
