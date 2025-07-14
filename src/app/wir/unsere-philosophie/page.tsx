"use client";


import FancyCompetitiveSlider from "@/components/ui/CustomCompetitiveSlider";
import ContactCTA from "@/components/ui/CustomContactCTA";
import Breadcrumbs from "@/components/wir/filosofia/BreadCrumb";
import FilosofiaOverview from "@/components/wir/filosofia/filosofiaOverview";
import Header from "@/components/wir/filosofia/header";

export default function QuienesSomos() {
    return (
        <div className="w-full">
            <Header/>
            <Breadcrumbs/>
            <FilosofiaOverview/>
            <FancyCompetitiveSlider/>
            <ContactCTA/>
        </div>
    );
}
