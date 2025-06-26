"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const scrollAnimatedCakePhotos = [
  { src: "https://placehold.co/600x400.png", hint: "chocolate velvet cake" },
  { src: "https://placehold.co/600x400.png", hint: "strawberry shortcake" },
  { src: "https://placehold.co/600x400.png", hint: "lemon meringue pie" },
  { src: "https://placehold.co/600x400.png", hint: "golden honeycomb cake" },
  { src: "https://placehold.co/600x400.png", hint: "caramel swirl cheesecake" },
  { src: "https://placehold.co/600x400.png", hint: "cherry pie" },
  { src: "https://placehold.co/600x400.png", hint: "lavender macarons" },
  { src: "https://placehold.co/600x400.png", hint: "pumpkin spice loaf" },
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
      { threshold: 0.2 }
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
      {scrollAnimatedCakePhotos.map((photo, index) => (
        <div
          key={index}
          className={cn(
            "scroll-image-item",
            index % 2 === 0 ? "from-left" : "from-right"
          )}
        >
          <Image
            src={photo.src}
            alt={`Sweet Delight ${index + 1}`}
            width={600}
            height={400}
            data-ai-hint={photo.hint}
            className="w-full h-auto object-cover rounded-2xl"
          />
        </div>
      ))}
    </div>
  );
}
