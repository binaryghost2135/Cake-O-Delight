"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const collagePhotos = [
  { src: "https://placehold.co/600x400.png", hint: "chocolate velvet cake" },
  { src: "https://placehold.co/600x400.png", hint: "strawberry shortcake" },
  { src: "https://placehold.co/600x400.png", hint: "lemon meringue pie" },
  { src: "https://placehold.co/600x400.png", hint: "golden honeycomb cake" },
];

export function ScrollAnimatedGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentGrid = gridRef.current;
    if (!currentGrid) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    const elements = currentGrid.querySelectorAll(".scroll-image-item");
    if (elements) {
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (elements) {
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <div ref={gridRef} className="scroll-animated-grid">
      {collagePhotos.map((photo, index) => (
        <div
          key={index}
          className={cn(
            "scroll-image-item",
            `item-${index + 1}`
          )}
        >
          <Image
            src={photo.src}
            alt={`Sweet Delight ${index + 1}`}
            width={600}
            height={400}
            data-ai-hint={photo.hint}
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
      ))}
    </div>
  );
}
