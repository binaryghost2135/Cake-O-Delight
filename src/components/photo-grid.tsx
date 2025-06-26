"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const cakePhotos = [
  { src: "https://placehold.co/600x400.png", hint: "chocolate cake" },
  { src: "https://placehold.co/600x400.png", hint: "assorted pastries" },
  { src: "https://placehold.co/600x400.png", hint: "custom birthday cake" },
  { src: "https://placehold.co/600x400.png", hint: "artisan bread" },
  { src: "https://placehold.co/600x400.png", hint: "cupcakes" },
  { src: "https://placehold.co/600x400.png", hint: "croissants" },
  { src: "https://placehold.co/600x400.png", hint: "wedding cake" },
  { src: "https://placehold.co/600x400.png", hint: "fruit tart" },
];

export function PhotoGrid() {
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
      { threshold: 0.15 }
    );

    const elements = currentGrid.querySelectorAll(".photo-item");
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
    <div ref={gridRef} id="photo-grid" className="photo-grid">
      {cakePhotos.map((photo, index) => (
        <div
          key={index}
          className={cn(
            "photo-item",
            index % 2 === 0 ? "from-left" : "from-right"
          )}
        >
          <Image
            src={photo.src}
            alt={`Delicious Cake ${index + 1}`}
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
