"use client";

import { useState, useEffect, type ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { FloatingIcons } from "./floating-icons";

const customerReviewsWithStars = [
  { text: `"Absolutely divine! The chocolate cake was a dream come true."`, stars: 5 },
  { text: `"Cake-O-Deliht never disappoints. Their pastries are fresh and flavorful."`, stars: 5 },
  { text: `"The custom cake for my birthday was stunning and delicious! Highly recommend."`, stars: 5 },
  { text: `"A must-visit bakery! Every item is a work of art and tastes even better."`, stars: 5 },
  { text: `"My go-to place for all things sweet. The staff are lovely too!"`, stars: 5 },
];

const LOGO_DISPLAY_TIME = 2500;
const LOGO_FADE_DURATION = 800;
const REVIEW_ITEM_DISPLAY_DURATION = 1500;
const REVIEW_ANIMATION_CSS_DURATION = 1000;
const REVIEW_BETWEEN_DELAY = 600;

type AnimationStage = "start" | "logo" | "reviews" | "done";

export function InitialAnimation({ children }: { children: ReactNode }) {
  const [stage, setStage] = useState<AnimationStage>("start");
  const [currentReviewIndex, setCurrentReviewIndex] = useState(-1);
  const [reviewItemClass, setReviewItemClass] = useState("");
  const [showOverlay, setShowOverlay] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const startTimer = setTimeout(() => setStage("logo"), 100);

    const logoTimer = setTimeout(() => {
      setStage("reviews");
    }, LOGO_DISPLAY_TIME + LOGO_FADE_DURATION + 100);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(logoTimer);
    };
  }, []);

  useEffect(() => {
    if (stage !== "reviews") return;

    const animateReviews = async () => {
      for (let i = 0; i < customerReviewsWithStars.length; i++) {
        await new Promise(resolve => setTimeout(resolve, REVIEW_BETWEEN_DELAY));
        setCurrentReviewIndex(i);
        setReviewItemClass(i % 2 === 0 ? "slide-from-left active-slide" : "slide-from-right active-slide");

        await new Promise(resolve => setTimeout(resolve, REVIEW_ITEM_DISPLAY_DURATION));
        setReviewItemClass(prev => prev.replace("active-slide", "fade-out-up"));

        await new Promise(resolve => setTimeout(resolve, REVIEW_ANIMATION_CSS_DURATION));
      }
      setStage("done");
    };

    animateReviews();
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

  const currentReview = customerReviewsWithStars[currentReviewIndex];
  const createStarsHtml = (count: number) => '⭐'.repeat(count);

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
              "review-container absolute z-15 flex flex-col items-center w-[90%] max-w-2xl text-center text-foreground transition-opacity duration-500",
              stage === "reviews" ? "opacity-100" : "opacity-0"
            )}
          >
            {currentReview && (
              <div className={cn("review-item absolute left-1/2 top-1/2 w-full p-4 transition-all ease-out", `duration-${REVIEW_ANIMATION_CSS_DURATION}ms`, reviewItemClass)}>
                <p className="text-3xl leading-snug italic font-cute">{currentReview.text}</p>
                <div className="text-2xl mt-2 tracking-[0.2em]">{createStarsHtml(currentReview.stars)}</div>
              </div>
            )}
          </div>
        </div>
      )}
      <div className={cn("transition-opacity duration-1000", showContent ? "opacity-100" : "opacity-0")}>
        {children}
      </div>
    </>
  );
}
