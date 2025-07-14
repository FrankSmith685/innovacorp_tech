"use client";

import Breadcrumbs from "@/components/kandidaten/gestion-internacional/BreadCrumb";
import GestionInternacionalOverview from "@/components/kandidaten/gestion-internacional/gestionInternacionalOverview";
import Header from "@/components/kandidaten/gestion-internacional/header";

export default function Reclutamiento() {
    return (
        <div className="w-full">
            <Header/>
            <Breadcrumbs/>
            <GestionInternacionalOverview/>
        </div>
    );
}
