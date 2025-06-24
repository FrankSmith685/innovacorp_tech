'use client';

import Image from "next/image";
import { useImagePreloader } from "@/hooks/useImageHooks/useImagePreloader";
import { FaSpinner } from "react-icons/fa";

type CustomImageProps = {
  name: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
};

const CustomImage = ({ name, alt, width, height, className }: CustomImageProps) => {
  const { images, isLoaded } = useImagePreloader();
  const imageSrc = images[name] ?? "";

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <FaSpinner className="animate-spin text-gray-500 text-3xl" />
      </div>
    );
  }

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width ?? 300}
      height={height ?? 200}
      className={className}
      loading="lazy"
    />
  );
};

export default CustomImage;
