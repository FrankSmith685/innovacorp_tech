"use client";

import { useEffect, useState } from "react";
import { welcomeData } from "@/components/home/data/WelcomeText";
import CustomHighlightMessage from "@/components/ui/CustomHighlightMessage";
import VideoBanner from "@/components/home/VideoBanner";
import WelcomeSection from "@/components/home/WelcomeSection";
import InfoCardSection from "@/components/home/InfoCardSection";
import CompetitiveSlider from "@/components/ui/CustomCompetitiveSlider";
import ContactCTA from "@/components/ui/CustomContactCTA";
import CustomLoader from "@/components/ui/CustomLoader";

export default function ClientHome() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-screen">
        <CustomLoader />
      </div>
    );
  }

  return (
    <div id="home-content-top">
      <VideoBanner />
      <WelcomeSection />
      <CustomHighlightMessage text={welcomeData.highlightMessage} />
      <InfoCardSection />
      <CompetitiveSlider />
      <div id="home-content-bottom" className="w-full">
        <ContactCTA />
      </div>
    </div>
  );
}
