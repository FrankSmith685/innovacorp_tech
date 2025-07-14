"use client";

import FancyCompetitiveSlider from "@/components/ui/CustomCompetitiveSlider";
import ContactCTA from "@/components/ui/CustomContactCTA";
import Breadcrumbs from "@/components/unternehmen/personalbewertungen/BreadCrumb";
import EvaluacionOverview from "@/components/unternehmen/personalbewertungen/EvaluacionOverview";
import Header from "@/components/unternehmen/personalbewertungen/header";

export default function Evaluacion() {
    return (
        <div className="w-full">
            <Header/>
            <Breadcrumbs/>
            <EvaluacionOverview/>
            <FancyCompetitiveSlider/>
            <ContactCTA/>
        </div>
    );
}
