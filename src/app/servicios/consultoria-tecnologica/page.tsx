"use client";

import Breadcrumbs from "@/components/servicios/consultoria-tecnologica/BreadCrumb";
import ConsultoriaOverview from "@/components/servicios/consultoria-tecnologica/ConsultioriaOverview";
import Header from "@/components/servicios/consultoria-tecnologica/header";
import ContactCTA from "@/components/ui/CustomContactCTA";
import CustomLoader from "@/components/ui/CustomLoader";
import { useEffect, useState } from "react";

export default function QuienesSomos() {
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
    const timer = setTimeout(() => {
        setIsLoading(false);
    }, 1500);
 
    return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="w-full h-screen">
            <CustomLoader />
            </div>
        );
        }
    return (
        <div className="w-full">
            <Header/>
            <Breadcrumbs/>
            <ConsultoriaOverview/>
            <ContactCTA />
        </div>
    );
}
