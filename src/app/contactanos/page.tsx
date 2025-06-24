"use client";

import Breadcrumbs from "@/components/contactanos/BreadCrumb";
import ContactanosOverview from "@/components/contactanos/ContactanosOverview";
import Header from "@/components/contactanos/header";
// import { welcomeData } from "@/components/home/data/WelcomeText";
// import Breadcrumbs from "@/components/quienes-somos/BreadCrumb";
// import CompanyOverview from "@/components/quienes-somos/CompanyOverview";
// import Header from "@/components/quienes-somos/header";
// import ContactCTA from "@/components/ui/CustomContactCTA";
// import CustomHighlightMessage from "@/components/ui/CustomHighlightMessage";
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
            <ContactanosOverview/>
            {/* <CompanyOverview/>
            <CustomHighlightMessage text={welcomeData.highlightMessage} />
            <ContactCTA /> */}
        </div>
    );
}
