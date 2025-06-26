"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const collagePhotos = [
  { src: "https://i.postimg.cc/JtVSVxLw/Whats-App-Image-2025-06-23-at-1.jpg", hint: "chocolate cake" },
  { src: "https://i.postimg.cc/MG375cTk/Whats-App-Image-2025-06-23-at-11.jpg", hint: "cake layers" },
  { src: "https://i.postimg.cc/nzSKs5yt/Whats-App-Image-2025-06-23-at-7.jpg", hint: "decorated cake" },
  { src: "https://i.postimg.cc/wBm35rRp/Whats-App-Image-2025-06-23-at-7.jpg", hint: "pink cake" },
  { src: "https://i.postimg.cc/3Nmxm0kF/Whats-App-Image-2025-06-23-at-7.jpg", hint: "pastry design" },
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
