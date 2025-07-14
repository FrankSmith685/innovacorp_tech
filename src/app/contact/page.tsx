"use client";

import Breadcrumbs from "@/components/contact/BreadCrumb";
import ContactanosOverview from "@/components/contact/ContactanosOverview";
import Header from "@/components/contact/header";

export default function Contactanos() {
    return (
        <div className="w-full">
            <Header/>
            <Breadcrumbs/>
            <ContactanosOverview/>
        </div>
    );
}
