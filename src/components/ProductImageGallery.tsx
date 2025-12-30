"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

interface ProductImageGalleryProps {
  images: string[];
  name: string;
}

export function ProductImageGallery({
  images,
  name,
}: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  if (!images || images.length === 0) return null;

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
        <Image
          src={images[selectedImage]}
          alt={name}
          fill
          className="object-cover transition-opacity duration-300"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="scrollbar-hide flex gap-3 overflow-x-auto pb-2 sm:grid sm:grid-cols-5 sm:gap-4 sm:overflow-visible">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={cn(
                "relative aspect-square w-20 flex-shrink-0 overflow-hidden rounded-xl border-2 transition-all sm:w-auto",
                selectedImage === index
                  ? "border-amber-600 shadow-md ring-2 ring-amber-600/20"
                  : "border-stone-200 bg-white hover:border-stone-300",
              )}
            >
              <Image
                src={image}
                alt={`${name} thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 80px, 120px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
