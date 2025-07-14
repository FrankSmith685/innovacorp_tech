"use client";


import Breadcrumbs from "@/components/other-services/visado-idioma/BreadCrumb";
import Header from "@/components/other-services/visado-idioma/header";
import VisadoIdiomaOverview from "@/components/other-services/visado-idioma/visadoIdiomaOverView";
import ContactCTA from "@/components/ui/CustomContactCTA";

export default function ViviendaTransporte() {
    return (
        <div className="w-full">
            <Header/>
            <Breadcrumbs/>
            <VisadoIdiomaOverview/>
            <ContactCTA/>
        </div>
    );
}
