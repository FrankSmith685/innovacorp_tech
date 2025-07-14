"use client";

import AuditoriaOverview from "@/components/company/audit/auditoriaOverview";
import Breadcrumbs from "@/components/company/audit/BreadCrumb";
import Header from "@/components/company/audit/header";
import FancyCompetitiveSlider from "@/components/ui/CustomCompetitiveSlider";
import ContactCTA from "@/components/ui/CustomContactCTA";

export default function Auditoria() {
    return (
        <div className="w-full">
            <Header/>
            <Breadcrumbs/>
            <AuditoriaOverview/>
            <FancyCompetitiveSlider/>
            <ContactCTA/>
        </div>
    );
}
