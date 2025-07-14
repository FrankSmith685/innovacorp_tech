"use client";

import Breadcrumbs from "@/components/sonstige-dienstleistungen/trabajo-impuesto/BreadCrumb";
import Header from "@/components/sonstige-dienstleistungen/trabajo-impuesto/header";
import TrabajoImpuestosOverview from "@/components/sonstige-dienstleistungen/trabajo-impuesto/trabajoImpuestoOverView";
// import Breadcrumbs from "@/components/otros-servicios/trabajo-impuesto/BreadCrumb";
// import Header from "@/components/otros-servicios/trabajo-impuesto/header";
// import TrabajoImpuestosOverview from "@/components/otros-servicios/trabajo-impuesto/trabajoImpuestoOverView";
import ContactCTA from "@/components/ui/CustomContactCTA";

export default function TrabajoImpuesto() {
    return (
        <div className="w-full">
            <Header/>
            <Breadcrumbs/>
            <TrabajoImpuestosOverview/>
            <ContactCTA/>
        </div>
    );
}
