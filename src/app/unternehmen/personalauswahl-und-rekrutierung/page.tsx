"use client";

import FancyCompetitiveSlider from "@/components/ui/CustomCompetitiveSlider";
import ContactCTA from "@/components/ui/CustomContactCTA";
import Breadcrumbs from "@/components/unternehmen/personalauswahl-und-rekrutierung/BreadCrumb";
import Header from "@/components/unternehmen/personalauswahl-und-rekrutierung/header";
import ReclutamientoOverview from "@/components/unternehmen/personalauswahl-und-rekrutierung/ReclutamientoOverview";

export default function Reclutamiento() {
    return (
        <div className="w-full">
            <Header/>
            <Breadcrumbs/>
            <ReclutamientoOverview/>
            <FancyCompetitiveSlider/>
            <ContactCTA/>
        </div>
    );
}
