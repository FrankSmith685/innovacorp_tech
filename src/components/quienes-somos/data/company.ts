import {
  FaLightbulb,
  FaCogs,
  FaUsers,
  FaRocket,
  FaLeaf,
  FaBullseye,
  FaEye,
} from 'react-icons/fa';
import { IconType } from 'react-icons';

export const sectionTitles = {
  mission: {
    title: 'Misión',
    icon: FaBullseye,
  },
  vision: {
    title: 'Visión',
    icon: FaEye,
  },
  values: 'Valores que Nos Impulsan',
  team: 'Nuestro Equipo',
  whyUs: '¿Por qué Elegirnos?',
};

export const companyIntro = `
Innovacorp es líder en el desarrollo de software y soluciones innovadoras. Con más de 5 años de experiencia, colaboramos estrechamente con clientes privados y entidades gubernamentales para diseñar, desarrollar e implementar proyectos que impactan de manera positiva en sus operaciones y en la vida de las personas.
`;

export const mission = `
Nuestra misión es impulsar el crecimiento y la transformación digital de las empresas, desarrollando soluciones tecnológicas a medida que mejoran la eficiencia, fomentan la innovación y crean valor a largo plazo. Nos comprometemos a ofrecer servicios de alta calidad en desarrollo de software, consultoría en innovación y transformación digital, trabajando en estrecha colaboración con nuestros clientes para convertir sus objetivos estratégicos en realidades digitales. Nos mueve la pasión por la tecnología y el deseo de ver a nuestros clientes triunfar en un entorno de constante evolución.
`;

export const vision = `
Ser el socio tecnológico de referencia para empresas que buscan liderar en la era digital. Aspiramos a construir un futuro donde las organizaciones puedan aprovechar al máximo el potencial de la tecnología para transformar sus procesos, mejorar su competitividad y ofrecer experiencias excepcionales a sus clientes. Nos proyectamos como una empresa innovadora y ágil, reconocida por su capacidad de anticiparse a las tendencias tecnológicas y por brindar soluciones de alto impacto que contribuyan al desarrollo sostenible y al crecimiento digital global.
`;

export const values: { title: string; description: string; icon: IconType }[] = [
  {
    title: 'Innovación Continua',
    description:
      'Fomentamos un entorno donde las ideas disruptivas y las tecnologías emergentes son el motor de nuestro crecimiento y el de nuestros clientes.',
    icon: FaLightbulb,
  },
  {
    title: 'Excelencia Técnica',
    description:
      'Nos comprometemos con los más altos estándares de calidad en el desarrollo y la implementación de nuestras soluciones tecnológicas.',
    icon: FaCogs,
  },
  {
    title: 'Orientación al Cliente',
    description:
      'Entendemos las necesidades únicas de cada cliente y trabajamos en estrecha colaboración para superar sus expectativas.',
    icon: FaUsers,
  },
  {
    title: 'Agilidad y Adaptabilidad',
    description:
      'Adoptamos metodologías ágiles que nos permiten responder rápidamente a los cambios y desafíos del mercado.',
    icon: FaRocket,
  },
  {
    title: 'Sostenibilidad',
    description:
      'Promovemos prácticas responsables que aseguren un impacto positivo tanto para nuestros clientes como para la sociedad y el medio ambiente.',
    icon: FaLeaf,
  },
];

export const team = [
  {
    name: 'Jonathan Paz',
    title: 'CEO',
    photo: 'team_01',
    description:
      'Mg. en Marketing y Negocios Internacionales, Profesor con certificación internacional en Emprendimiento e Innovación por la Universidad de Salamanca, España, con más de 10 años de experiencia en proyectos de comunicación, innovación, investigación y desarrollo.',
  },
  {
    name: 'Manuel Foco',
    title: 'Ingeniero de Software Senior',
    photo: 'team_04',
    description:
      'Ingeniero de Software Senior, Full Stack, con 12 años de experiencia en desarrollo de sistemas y aplicaciones web y móvil. Especializado en .NET, Angular, JavaScript, React. Con experiencia en arquitecturas escalables y microservicios.',
  },
  {
    name: 'Carolina Destinobles',
    title: 'Especialista en Calidad de Software',
    photo: 'team_03',
    description:
      'Ingeniera Empresarial y de Sistemas, especialista en calidad de software, con más de 10 años de experiencia en pruebas funcionales, no funcionales, de regresión y automatización, así como en metodologías ágiles y procesos.',
  },
  {
    name: 'Frank Bocangelino',
    title: 'Full Stack Developer',
    photo: 'team_02',
    description:
      'Desarrollador Full Stack con 3 años de experiencia en desarrollo de sistemas y aplicaciones, especialista en Angular, Node.js, React.js, Next.js, Spring para Java y bibliotecas como Express.js, Redux, React-Hooks, Rest API, Spring Data JPA y MySQL.',
  },
];

export const whyUs = `
Nuestra pasión es llevar a nuestros clientes al éxito mediante tecnología de vanguardia y soluciones que no solo resuelvan problemas actuales, sino que preparen tu negocio para el futuro. Trabajamos en estrecha colaboración contigo, asegurando que cada proyecto refleje tus objetivos estratégicos y maximice tu retorno de inversión.
`;
