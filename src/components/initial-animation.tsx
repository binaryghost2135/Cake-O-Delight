"use client";

import { useState, useEffect, type ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { FloatingIcons } from "./floating-icons";
import { Star } from "lucide-react";

const customerReviews = [
  { 
    name: "Priya S.",
    text: `"The custom cake for my birthday was stunning and delicious! Highly recommend."`,
    imageSrc: "https://placehold.co/80x80.png",
    imageHint: "woman portrait" 
  },
  { 
    name: "Rohan K.",
    text: `"Cake-O-Delight never disappoints. Their pastries are fresh and flavorful."`, 
    imageSrc: "https://placehold.co/80x80.png",
    imageHint: "man portrait" 
  },
];

const LOGO_DISPLAY_TIME = 2500;
const LOGO_FADE_DURATION = 800;
const REVIEWS_DISPLAY_DURATION = 4000;
const REVIEWS_FADE_DURATION = 1000;

type AnimationStage = "start" | "logo" | "reviews" | "done";

export function InitialAnimation({ children }: { children: ReactNode }) {
  const [stage, setStage] = useState<AnimationStage>("start");
  const [animationClass, setAnimationClass] = useState("");
  const [showOverlay, setShowOverlay] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const startTimer = setTimeout(() => setStage("logo"), 100);

    const logoTimer = setTimeout(() => {
      setStage("reviews");
    }, LOGO_DISPLAY_TIME + LOGO_FADE_DURATION);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(logoTimer);
    };
  }, []);

  useEffect(() => {
    if (stage === "reviews") {
      const showReviewsTimer = setTimeout(() => setAnimationClass("visible"), 100);

      const hideReviewsTimer = setTimeout(() => {
        setAnimationClass("exit");
      }, REVIEWS_DISPLAY_DURATION);

      const doneTimer = setTimeout(() => {
        setStage("done");
      }, REVIEWS_DISPLAY_DURATION + REVIEWS_FADE_DURATION);

      return () => {
        clearTimeout(showReviewsTimer);
        clearTimeout(hideReviewsTimer);
        clearTimeout(doneTimer);
      };
    }
  }, [stage]);

  useEffect(() => {
    if (stage === "done") {
      const fadeOutTimer = setTimeout(() => {
        setShowOverlay(false);
        document.body.style.overflow = "auto";
        const contentFadeInTimer = setTimeout(() => setShowContent(true), 50);
        return () => clearTimeout(contentFadeInTimer);
      }, 500);
      return () => clearTimeout(fadeOutTimer);
    }
  }, [stage]);

  return (
    <>
      {showOverlay && (
        <div
          className={cn(
            "fixed inset-0 bg-background z-[2000] flex justify-center items-center transition-opacity duration-500",
            stage === "done" ? "opacity-0" : "opacity-100"
          )}
        >
          <Image
            src="https://placehold.co/200x200.png"
            data-ai-hint="bakery logo"
            alt="Bakery Logo"
            width={180}
            height={180}
            priority
            className={cn(
              "absolute z-10 w-[180px] h-[180px] rounded-full shadow-2xl transition-all",
              stage === "logo" ? "opacity-70 scale-100" : "opacity-0 scale-0",
              stage === 'logo' ? `duration-700 ease-out` : `duration-${LOGO_FADE_DURATION} ease-out`
            )}
          />
          <FloatingIcons numIcons={8} animationClass="initial-animation" />
          <div
            className={cn(
              "review-cards-container transition-opacity duration-500",
              stage === "reviews" ? "opacity-100" : "opacity-0"
            )}
          >
            {customerReviews.slice(0, 2).map((review, index) => (
              <div
                key={review.name}
                className={cn(
                  "review-card flex flex-col items-center text-center",
                  index === 0 ? "left-card" : "right-card",
                  animationClass
                )}
              >
                <Image
                  src={review.imageSrc}
                  alt={review.name}
                  width={80}
                  height={80}
                  data-ai-hint={review.imageHint}
                  className="rounded-full w-20 h-20 object-cover mb-4 border-4 border-primary/50 shadow-md"
                />
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-lg italic font-cute text-foreground/90 mb-4 leading-snug">
                  {review.text}
                </p>
                <footer className="font-semibold text-accent/80">
                  ~ {review.name}
                </footer>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className={cn("transition-opacity duration-1000", showContent ? "opacity-100" : "opacity-0")}>
        {children}
      </div>
    </>
  );
}
