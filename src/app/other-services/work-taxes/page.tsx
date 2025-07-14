"use client";

import Breadcrumbs from "@/components/other-services/trabajo-impuesto/BreadCrumb";
import Header from "@/components/other-services/trabajo-impuesto/header";
import TrabajoImpuestosOverview from "@/components/other-services/trabajo-impuesto/trabajoImpuestoOverView";
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
