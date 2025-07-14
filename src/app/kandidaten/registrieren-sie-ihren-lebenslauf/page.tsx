"use client";

import Breadcrumbs from "@/components/kandidaten/registre-curriculum/BreadCrumb";
import Header from "@/components/kandidaten/registre-curriculum/header";
import RegistreCurriculumOverview from "@/components/kandidaten/registre-curriculum/registreCurriculumOverview";

export default function Reclutamiento() {
    return (
        <div className="w-full">
            <Header/>
            <Breadcrumbs/>
            <RegistreCurriculumOverview/>
        </div>
    );
}
