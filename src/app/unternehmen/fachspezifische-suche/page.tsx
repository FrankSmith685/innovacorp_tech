"use client";

import FancyCompetitiveSlider from "@/components/ui/CustomCompetitiveSlider";
import ContactCTA from "@/components/ui/CustomContactCTA";
import Breadcrumbs from "@/components/unternehmen/fachspezifische-suche/BreadCrumb";
import BusquedaOverview from "@/components/unternehmen/fachspezifische-suche/busquedaOverview";
import Header from "@/components/unternehmen/fachspezifische-suche/header";

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
