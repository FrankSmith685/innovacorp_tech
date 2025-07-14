"use client";

import Breadcrumbs from "@/components/candidates/gestion-internacional/BreadCrumb";
import GestionInternacionalOverview from "@/components/candidates/gestion-internacional/gestionInternacionalOverview";
import Header from "@/components/candidates/gestion-internacional/header";

export default function Reclutamiento() {
    return (
        <div className="w-full">
            <Header/>
            <Breadcrumbs/>
            <GestionInternacionalOverview/>
        </div>
    );
}
