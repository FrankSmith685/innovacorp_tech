// components/home/ClientHome.tsx
"use client";

import { welcomeData } from "@/components/home/data/WelcomeText";
import CustomHighlightMessage from "@/components/ui/CustomHighlightMessage";
import VideoBanner from "@/components/home/VideoBanner";
import WelcomeSection from "@/components/home/WelcomeSection";
import InfoCardSection from "@/components/home/InfoCardSection";
import CompetitiveSlider from "@/components/ui/CustomCompetitiveSlider";
import ContactCTA from "@/components/ui/CustomContactCTA";

export default function ClientHome() {
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
