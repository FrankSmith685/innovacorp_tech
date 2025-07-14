"use client";

import FancyCompetitiveSlider from "@/components/ui/CustomCompetitiveSlider";
import ContactCTA from "@/components/ui/CustomContactCTA";
import Breadcrumbs from "@/components/unternehmen/international/BreadCrumb";
import Header from "@/components/unternehmen/international/header";
import InternacionalOverview from "@/components/unternehmen/international/InternacionalOverview";

export default function Internacional() {
    return (
        <div className="w-full">
            <Header/>
            <Breadcrumbs/>
            <InternacionalOverview/>
            <FancyCompetitiveSlider/>
            <ContactCTA/>
        </div>
    );
}
