"use client";

import Breadcrumbs from "@/components/candidates/registre-curriculum/BreadCrumb";
import Header from "@/components/candidates/registre-curriculum/header";
import RegistreCurriculumOverview from "@/components/candidates/registre-curriculum/registreCurriculumOverview";

export default function Reclutamiento() {
    return (
        <div className="w-full">
            <Header/>
            <Breadcrumbs/>
            <RegistreCurriculumOverview/>
        </div>
    );
}
