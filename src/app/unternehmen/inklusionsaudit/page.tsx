"use client";

import FancyCompetitiveSlider from "@/components/ui/CustomCompetitiveSlider";
import ContactCTA from "@/components/ui/CustomContactCTA";
import AuditoriaOverview from "@/components/unternehmen/inklusionsaudit/auditoriaOverview";
import Breadcrumbs from "@/components/unternehmen/inklusionsaudit/BreadCrumb";
import Header from "@/components/unternehmen/inklusionsaudit/header";

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
