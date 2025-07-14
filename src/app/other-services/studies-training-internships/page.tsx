"use client";

import Breadcrumbs from "@/components/other-services/estudio-formacion-practicas/BreadCrumb";
import EstudiosOverview from "@/components/other-services/estudio-formacion-practicas/estudiosOverView";
import Header from "@/components/other-services/estudio-formacion-practicas/header";
import ContactCTA from "@/components/ui/CustomContactCTA";

export default function EstudioFormacionPracticas() {
    return (
        <div className="w-full">
            <Header/>
            <Breadcrumbs/>
            <EstudiosOverview/>
            <ContactCTA/>
        </div>
    );
}
