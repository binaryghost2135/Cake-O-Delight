"use client";

import { useState, useEffect, type ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { FloatingIcons } from "./floating-icons";
import { Star } from "lucide-react";

const customerReviews = [
  { 
    text: `"Dear you aren't serving us...we are serving our own selves and you are helping us do that in a true sense 🤗❣️"`,
    imageSrc: "https://placehold.co/80x80.png",
    imageHint: "woman portrait" 
  },
  { 
    text: `"hey the cake was really tasty, special thank you for making it ready at the very last minute, it’s literally the same as what we imagined"`, 
    imageSrc: "https://placehold.co/80x80.png",
    imageHint: "man portrait" 
  },
  { 
    text: `"It was as we imagined"`, 
    imageSrc: "https://placehold.co/80x80.png",
    imageHint: "woman portrait" 
  },
  { 
    text: `"Out of Pinterest"`, 
    imageSrc: "https://placehold.co/80x80.png",
    imageHint: "woman portrait" 
  },
];

const LOGO_DISPLAY_TIME = 2500;
const LOGO_FADE_DURATION = 800;
const REVIEWS_DISPLAY_DURATION = 5000; // Increased duration for two sets of reviews
const REVIEWS_FADE_DURATION = 1000;

type AnimationStage = "start" | "logo" | "reviews" | "done";

export function InitialAnimation({ children }: { children: ReactNode }) {
  const [stage, setStage] = useState<AnimationStage>("start");
  const [animationClass, setAnimationClass] = useState("");
  const [showOverlay, setShowOverlay] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [reviewSet, setReviewSet] = useState(0);

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

      const switchReviewsTimer = setTimeout(() => {
        setAnimationClass("exit");
        setTimeout(() => {
          setReviewSet(1);
          setAnimationClass("visible");
        }, REVIEWS_FADE_DURATION);
      }, REVIEWS_DISPLAY_DURATION / 2);

      const hideReviewsTimer = setTimeout(() => {
        setAnimationClass("exit");
      }, REVIEWS_DISPLAY_DURATION);

      const doneTimer = setTimeout(() => {
        setStage("done");
      }, REVIEWS_DISPLAY_DURATION + REVIEWS_FADE_DURATION);

      return () => {
        clearTimeout(showReviewsTimer);
        clearTimeout(switchReviewsTimer);
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

  const reviewsToShow = customerReviews.slice(reviewSet * 2, reviewSet * 2 + 2);

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
            src="https://i.postimg.cc/sXwtZM0B/Whats-App-Image-2025-06-26-at-6.jpg"
            data-ai-hint="bakery logo"
            alt="Bakery Logo"
            width={180}
            height={180}
            priority
            className={cn(
              "absolute z-10 w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] rounded-full shadow-2xl transition-all",
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
            {reviewsToShow.map((review, index) => (
              <div
                key={review.text}
                className={cn(
                  "review-card flex flex-col items-center text-center",
                  index === 0 ? "left-card" : "right-card",
                  animationClass
                )}
              >
                <Image
                  src={review.imageSrc}
                  alt="Customer review"
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
                <p className="text-base sm:text-lg italic text-foreground/90 mb-4 leading-snug">
                  {review.text}
                </p>
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
