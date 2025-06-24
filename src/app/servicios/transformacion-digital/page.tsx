"use client";

import Breadcrumbs from "@/components/servicios/transformacion-digital/BreadCrumb";
import TransformacionOverview from "@/components/servicios/transformacion-digital/DesarrolloOverview";
import Header from "@/components/servicios/transformacion-digital/header";
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
            <TransformacionOverview/>
            <ContactCTA />
        </div>
    );
}
