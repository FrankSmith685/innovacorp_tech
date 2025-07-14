"use client";

import Breadcrumbs from "@/components/company/functions/BreadCrumb";
import FuncionesOverview from "@/components/company/functions/funcionesOverview";
import Header from "@/components/company/functions/header";
import FancyCompetitiveSlider from "@/components/ui/CustomCompetitiveSlider";
import ContactCTA from "@/components/ui/CustomContactCTA";

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
