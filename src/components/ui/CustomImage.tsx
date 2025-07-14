'use client';

import Image from 'next/image';

type CustomImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  isCritical?: boolean;
};

const CustomImage = ({
  src,
  alt,
  width = 250,
  height = 150,
  className,
  isCritical = false,
}: CustomImageProps) => {

  return (
    // <div className={`relative`} style={{ width, height }}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        // style={{ height: width, width: height }}
        className={`${className ?? ''} opacity-100 transition-opacity duration-300`}
        loading={isCritical ? 'eager' : 'lazy'}
        priority={isCritical}
      />
    // </div>
  );
};

export default CustomImage;

