"use client";

import Breadcrumbs from "@/components/proyectos/BreadCrumb";
import Header from "@/components/proyectos/header";
import ProyectoOverview from "@/components/proyectos/ProyectoOverview";
// import Breadcrumbs from "@/components/servicios/desarollo-software/BreadCrumb";
// import DesarrolloOverview from "@/components/servicios/desarollo-software/DesarrolloOverview";
// import Header from "@/components/servicios/desarollo-software/header";
// import ContactCTA from "@/components/ui/CustomContactCTA";
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
            <ProyectoOverview/>
            {/* <DesarrolloOverview/>
            <ContactCTA /> */}
        </div>
    );
}
