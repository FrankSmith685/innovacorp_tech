"use client";

import Breadcrumbs from "@/components/company/search/BreadCrumb";
import BusquedaOverview from "@/components/company/search/busquedaOverview";
import Header from "@/components/company/search/header";
import FancyCompetitiveSlider from "@/components/ui/CustomCompetitiveSlider";
import ContactCTA from "@/components/ui/CustomContactCTA";

export default function Busqueda() {
    return (
        <div className="w-full">
            <Header/>
            <Breadcrumbs/>
            <BusquedaOverview/>
            <FancyCompetitiveSlider/>
            <ContactCTA/>
        </div>
    );
}
