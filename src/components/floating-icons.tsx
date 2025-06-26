"use client";

import { useState, useEffect } from "react";

interface FloatingIconsProps {
  numIcons: number;
  animationClass: "initial-animation" | "continuous-animation";
}

const cakeEmojis = ['🎂', '🧁', '🍰', '🍪', '🍩'];

interface Icon {
  id: number;
  emoji: string;
  style: React.CSSProperties;
}

export function FloatingIcons({ numIcons, animationClass }: FloatingIconsProps) {
  const [icons, setIcons] = useState<Icon[]>([]);

  useEffect(() => {
    const newIcons: Icon[] = [];
    for (let i = 0; i < numIcons; i++) {
      const duration = animationClass === 'initial-animation' 
        ? 3 + Math.random() * 3
        : 10 + Math.random() * 10;
      
      newIcons.push({
        id: i,
        emoji: cakeEmojis[Math.floor(Math.random() * cakeEmojis.length)],
        style: {
          left: `${Math.random() * 100}vw`,
          top: `${Math.random() * 100}vh`,
          animationDelay: `${Math.random() * (duration / 2)}s`,
          animationDuration: `${duration}s`,
          fontSize: `${1.2 + Math.random() * 0.8}rem`,
          opacity: animationClass === 'initial-animation' ? 0.5 : 0.15
        },
      });
    }
    setIcons(newIcons);
  }, [numIcons, animationClass]);

  const containerClass = animationClass === 'initial-animation'
    ? "absolute inset-0 overflow-hidden z-[5]"
    : "fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden";

  return (
    <div className={containerClass}>
      {icons.map(icon => (
        <div
          key={icon.id}
          className="floating-cake-icon animate-float-and-rotate"
          style={icon.style}
        >
          {icon.emoji}
        </div>
      ))}
    </div>
  );
}
