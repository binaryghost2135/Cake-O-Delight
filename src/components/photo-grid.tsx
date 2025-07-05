"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const cakePhotos = [
  { src: "https://i.postimg.cc/fyz6gPKf/Whats-App-Image-2025-06-22-at-8.jpg", hint: "decorated cake" },
  { src: "https://i.postimg.cc/V6Qx8vYg/Whats-App-Image-2025-06-30-at-10.jpg", hint: "bento cake" },
  { src: "https://i.postimg.cc/d1swpF8L/Whats-App-Image-2025-06-22-at-8.jpg", hint: "cupcakes" },
  { src: "https://i.postimg.cc/3wHKjmNj/Whats-App-Image-2025-06-22-at-8.jpg", hint: "cake box" },
  { src: "https://i.postimg.cc/Nf5fQQZX/Whats-App-Image-2025-06-23-at-11.jpg", hint: "cake layers" },
  { src: "https://i.postimg.cc/FHSrJDrs/Whats-App-Image-2025-06-23-at-8.jpg", hint: "chocolate cake" },
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
      { threshold: 0.1 }
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
