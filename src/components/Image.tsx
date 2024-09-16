"use client"
// components/ImageWithFallback.tsx
import React, { useState } from 'react';
import Image from 'next/image';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  width,
  height,
  className
}) => {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [hasError, setHasError] = useState<boolean>(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc("https://test.create.diagnal.com/images/placeholder_for_missing_posters.png");
    }
  };

  return (
    <Image
      className={className}
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      onError={handleError}
    />
  );
};

export default ImageWithFallback;
