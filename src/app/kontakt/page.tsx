"use client";

import Breadcrumbs from "@/components/kontakt/BreadCrumb";
import ContactanosOverview from "@/components/kontakt/ContactanosOverview";
import Header from "@/components/kontakt/header";


export default function Contactanos() {
    return (
        <div className="w-full">
            <Header/>
            <Breadcrumbs/>
            <ContactanosOverview/>
        </div>
    );
}
