"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

type GallerySectionProps = {
  images: string[];
};

export function GallerySection({ images }: GallerySectionProps) {
  const [expanded, setExpanded] = useState(false);
  const visibleImages = useMemo(() => {
    if (expanded) return images;
    return images.slice(0, 6);
  }, [expanded, images]);

  return (
    <section className="px-6 pb-16 md:px-14">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <div className="flex flex-col gap-3 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#b18b62]">
            Gallery
          </p>
          <h2 className="font-display text-4xl text-[#2a2118] md:text-5xl">
            Moments In Bloom
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {visibleImages.map((src, index) => (
            <div
              key={`${src}-${index}`}
              className="relative aspect-square overflow-hidden rounded-2xl"
            >
              <Image
                src={src}
                alt={`Gallery ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 33vw"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center md:hidden">
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="rounded-full border border-[#b18b62] px-6 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#6d5f50] transition hover:bg-[#b18b62] hover:text-white"
          >
            {expanded ? "Hide Photos" : "View All Photos"}
          </button>
        </div>
      </div>
    </section>
  );
}
