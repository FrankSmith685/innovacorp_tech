"use client";

import FancyCompetitiveSlider from "@/components/ui/CustomCompetitiveSlider";
import ContactCTA from "@/components/ui/CustomContactCTA";
import Breadcrumbs from "@/components/unternehmen/funktionen/BreadCrumb";
import FuncionesOverview from "@/components/unternehmen/funktionen/funcionesOverview";
import Header from "@/components/unternehmen/funktionen/header";

export default function Funciones() {
    return (
        <div className="w-full">
            <Header/>
            <Breadcrumbs/>
            <FuncionesOverview/>
            <FancyCompetitiveSlider/>
            <ContactCTA/>
        </div>
    );
}
