"use client";

import Breadcrumbs from "@/components/company/assessment/BreadCrumb";
import EvaluacionOverview from "@/components/company/assessment/EvaluacionOverview";
import Header from "@/components/company/assessment/header";
import FancyCompetitiveSlider from "@/components/ui/CustomCompetitiveSlider";
import ContactCTA from "@/components/ui/CustomContactCTA";

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
