"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const collagePhotos = [
  { src: "https://i.postimg.cc/9X13qWm8/Whats-App-Image-2025-06-22-at-8.jpg", hint: "cake design" },
  { src: "https://i.postimg.cc/Pr9Zj3Vt/Whats-App-Image-2025-06-23-at-1.jpg", hint: "sweet delight" },
  { src: "https://i.postimg.cc/qMznWVLb/Whats-App-Image-2025-06-23-at-7.jpg", hint: "cake art" },
  { src: "https://i.postimg.cc/gJm87xS8/Whats-App-Image-2025-06-23-at-7.jpg", hint: "pink pastry" },
  { src: "https://i.postimg.cc/gJs8bGQ5/Whats-App-Image-2025-06-23-at-7.jpg", hint: "decorated pastry" },
  { src: "https://i.postimg.cc/k58vz3n3/Whats-App-Image-2025-06-23-at-8.jpg", hint: "chocolate pastry" },
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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = currentGrid.querySelectorAll(".overlapping-photo-item");
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
    <div ref={gridRef} className="overlapping-photo-grid">
      {collagePhotos.map((photo, index) => (
        <div
          key={index}
          className={cn(
            "overlapping-photo-item",
            index % 2 === 0 ? "from-left" : "from-right"
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
