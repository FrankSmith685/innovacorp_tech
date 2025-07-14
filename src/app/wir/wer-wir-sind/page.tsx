"use client";

import FancyCompetitiveSlider from "@/components/ui/CustomCompetitiveSlider";
import ContactCTA from "@/components/ui/CustomContactCTA";
import Breadcrumbs from "@/components/wir/quienes-somos/BreadCrumb";
import Header from "@/components/wir/quienes-somos/header";
import QuienesSomosOverview from "@/components/wir/quienes-somos/quienesSomosOverview";

export default function QuienesSomos() {
    return (
        <div className="w-full">
            <Header/>
            <Breadcrumbs/>
            <QuienesSomosOverview/>
            <FancyCompetitiveSlider/>
            <ContactCTA/>
        </div>
    );
}
