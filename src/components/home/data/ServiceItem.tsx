// src/data/servicesItems.tsx
import { FiSettings, FiActivity, FiStar, FiShield } from "react-icons/fi";

export const servicesItems = [
  {
    label: "Desarrollo de Software y Aplicaciones",
    href: "/servicios/desarrollo-software",
    icon: <FiSettings />,
    description:
      "Creamos plataformas digitales eficientes y escalables adaptadas a tus necesidades.",
  },
  {
    label: "Consultoría de Innovación Tecnológica",
    href: "/servicios/consultoria-tecnologica",
    icon: <FiActivity />,
    description:
      "Impulsamos la transformación de tu empresa con soluciones innovadoras y estratégicas.",
  },
  {
    label: "Transformación Digital",
    href: "/servicios/transformacion-digital",
    icon: <FiStar />,
    description:
      "Modernizamos procesos y tecnologías para acelerar tu crecimiento digital.",
  },
  {
    label: "Seguridad Gubernamental y Corporativa",
    href: "/servicios/seguridad",
    icon: <FiShield />,
    description:
      "Tecnología avanzada, IA y personal calificado para vigilancia efectiva y protección integral.",
  },
];
