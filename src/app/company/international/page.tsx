"use client";
import Breadcrumbs from "@/components/company/international/BreadCrumb";
import Header from "@/components/company/international/header";
import InternacionalOverview from "@/components/company/international/InternacionalOverview";
import FancyCompetitiveSlider from "@/components/ui/CustomCompetitiveSlider";
import ContactCTA from "@/components/ui/CustomContactCTA";

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
