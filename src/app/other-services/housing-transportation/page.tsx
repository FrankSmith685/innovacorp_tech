"use client";

import Breadcrumbs from "@/components/other-services/vivienda-transporte/BreadCrumb";
import Header from "@/components/other-services/vivienda-transporte/header";
import ViviendaTransporteOverview from "@/components/other-services/vivienda-transporte/viviendaTransporteOverView";
import ContactCTA from "@/components/ui/CustomContactCTA";

export default function ViviendaTransporte() {
    return (
        <div className="w-full">
            <Header/>
            <Breadcrumbs/>
            <ViviendaTransporteOverview/>
            <ContactCTA/>
        </div>
    );
}
