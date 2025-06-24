// navItems.tsx
import CustomImage from "@/components/ui/CustomImage";
import { NavItem } from "@/interface/navItem";
import { FiUsers, FiBriefcase, FiStar, FiMail, FiActivity, FiSettings, FiShield } from "react-icons/fi";


// Datos de navegación
export const navItems: NavItem[] = [
    {
    label: "¿Quiénes Somos?",
    href: "/quienes-somos",
    icon: <FiUsers />,
    title: "Conócenos mejor",
    description: "Impulsamos la transformación digital con innovación, excelencia y un equipo experto.",
    subItems: [
            {
            label: "Nuestra historia",
            href: "/quienes-somos#historia",
            icon: <FiActivity />,
            },
            {
            label: "Equipo",
            href: "/quienes-somos#equipo",
            icon: <FiUsers />,
            },
        ],
    },
    {
        label: "Servicios",
        href: "/servicios",
        icon: <FiBriefcase />,
        title: "Nuestros Servicios",
        description: "Impulsamos la innovación y la eficiencia a través de soluciones tecnológicas personalizadas.",
        subItems: [
            {
            label: "Desarrollo de Software y Aplicaciones",
            href: "/servicios/desarrollo-software",
            icon: <FiSettings />,
            },
            {
            label: "Consultoría de Innovación Tecnológica",
            href: "/servicios/consultoria-tecnologica",
            icon: <FiActivity />,
            },
            {
            label: "Transformación Digital",
            href: "/servicios/transformacion-digital",
            icon: <FiStar />,
            },
            {
            label: "Seguridad Gubernamental y Corporativa",
            href: "/servicios/seguridad",
            icon: <FiShield />,
            },
        ],
    },
    {
        label: "Proyectos",
        href: "/proyectos",
        icon: <FiStar />,
        title: "Proyectos Destacados",
        description: "Descubre algunos de nuestros proyectos más impactantes.",
        subItems: [
            {
            label: "Mappi.pe",
            href: "/proyectos/mappi",
            icon: <CustomImage
                name="logo_01_mappi"
                alt="Logo de MiEmpresa"
                width={65}
                height={65}
                className="object-contain transition-all duration-300"
            />,
            },
        ],
    },
    {
        label: "Contáctanos",
        href: "/contactanos",
        icon: <FiMail />,
        title: "¿Listo para comenzar?",
        description: "Contáctanos hoy mismo para hablar sobre tu transformación tecnológica.",
        subItems: [],
    },
];
