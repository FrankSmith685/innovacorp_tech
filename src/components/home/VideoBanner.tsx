'use client';

import { useEffect, useState } from "react";
import { FaGripLinesVertical } from "react-icons/fa";
import ServicesGrid from "./ServiceGrid";
import { bannerIntro, bannerTexts } from "./data/BannerText";
import ScrollIndicator from "../ui/CustomScrollIndicator";

export default function VideoBanner() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
    const currentText = bannerTexts[textIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedText.length < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentText.substring(0, displayedText.length + 1));
      }, 100);
    } else if (!isDeleting && displayedText.length === currentText.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1000);
    } else if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentText.substring(0, displayedText.length - 1));
      }, 60);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % bannerTexts.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, textIndex]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
        <>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover scale-125"
          >
            <source
              src="https://mappidevbucket.s3.amazonaws.com/inno_696"
              type="video/mp4"
            />
          </video>

          <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)] z-10" />

          <div className="absolute inset-0 z-20 flex flex-col items-center justify-start text-center px-4 pt-[150px] md:pt-[200px]">
            <h1 className="text-white text-2xl md:text-3xl font-bold leading-snug">
              {bannerIntro}{" "}
              <span className="text-blue-400">
                {displayedText}
                <span className="animate-pulse inline-block ml-1 text-blue-300">
                  <FaGripLinesVertical />
                </span>
              </span>
            </h1>
          </div>

          <div className="absolute bottom-6 w-full flex justify-center px-4">
            <ServicesGrid />
          </div>
          <ScrollIndicator />
        </>
    </div>
  );
}
