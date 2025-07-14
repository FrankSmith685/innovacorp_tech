"use client";

import Breadcrumbs from "@/components/company/recruitment/BreadCrumb";
import Header from "@/components/company/recruitment/header";
import ReclutamientoOverview from "@/components/company/recruitment/ReclutamientoOverview";
import FancyCompetitiveSlider from "@/components/ui/CustomCompetitiveSlider";
import ContactCTA from "@/components/ui/CustomContactCTA";

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
