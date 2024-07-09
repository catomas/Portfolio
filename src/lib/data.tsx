import {
  BellPlus,
  BookText,
  Briefcase,
  Brush,
  Code2,
  FolderOpenDot,
  Home,
  Inbox,
  Mail,
  PanelsTopLeft,
  Phone,
  Pickaxe,
  TabletSmartphone,
  UserRound,
  UsersRound,
  Wrench,
} from "lucide-react";
import {
  FaAngular,
  FaBitbucket,
  FaCss3Alt,
  FaDocker,
  FaFigma,
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaReact,
  FaSourcetree,
  FaUnity,
} from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { IoLogoFirebase, IoLogoGithub } from "react-icons/io5";

export const dataAboutMe = [
  [
    {
      id: 1,
      name: "Experiencia",
      icon: <Briefcase />,
      description: "+3 años de experiencia",
    },
    {
      id: 2,
      name: "Estudio",
      icon: <UsersRound />,
      description: "Ingeniería en Sistemas - EAFIT",
    },
    {
      id: 3,
      name: "Proyectos",
      icon: <Wrench />,
      description: "+20 completados",
    },
  ],
  [
    {
      id: 1,
      name: "Experience",
      icon: <Briefcase />,
      description: "+3 years of experience",
    },
    {
      id: 2,
      name: "Study",
      icon: <UsersRound />,
      description: "Systems Engineering - EAFIT",
    },
    {
      id: 3,
      name: "Projects",
      icon: <Wrench />,
      description: "+20 completed",
    },
  ],
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <Home size={20} />,
    link: "#home",
  },
  {
    id: 2,
    title: "About me",
    icon: <UserRound size={20} />,
    link: "#about_me",
  },
  {
    id: 3,
    title: "Experience",
    icon: <Pickaxe size={20} />,
    link: "#experience",
  },
  {
    id: 4,
    title: "Services",
    icon: <BookText size={20} />,
    link: "#services",
  },
  {
    id: 5,
    title: "Projects",
    icon: <FolderOpenDot size={20} />,
    link: "#projects",
  },

  {
    id: 6,
    title: "Mail",
    icon: <Mail size={20} />,
    link: "#contact",
  },
];

export const dataPortfolio = [
  {
    id: 8,
    title: "Linguify",
    image: "/projects/linguify.png",
    urlGithub: "https://github.com/catomas/linguify",
    urlDemo: "https://linguify-snowy.vercel.app",
  },
  {
    id: 1,
    title: "JCE Avaluos Portfolio",
    image: "/projects/JCEAvaluos.png",
    urlGithub: "https://github.com/catomas/JCE-Portfolio",
    urlDemo: "https://www.juancarlosavaluos.com/",
  },
  {
    id: 2,
    title: "Kuro | Shop",
    image: "/projects/kuro.png",
    urlGithub: "https://github.com/catomas/Kuro-Shop",
    urlDemo: "https://kuro-shop.vercel.app/",
  },
  {
    id: 7,
    title: "iPhone 15 Page",
    image: "/projects/Iphone.png",
    urlGithub: "https://github.com/catomas/iPhone-web",
    urlDemo: "https://i-phone-web.vercel.app/",
  },
  {
    id: 3,
    title: "Chat Web App",
    image: "/projects/chatweb.png",
    urlGithub: "https://github.com/catomas/chatApp-Frontend",
    urlDemo: "https://chat-web-frontend.netlify.app/",
  },
  {
    id: 4,
    title: "Genius",
    image: "/projects/genius.png",
    urlGithub: "https://github.com/catomas/genius",
    urlDemo: "https://genius-roan.vercel.app/",
  },
  {
    id: 5,
    title: "Quill",
    image: "/projects/quill.png",
    urlGithub: "https://github.com/catomas/quill",
    urlDemo: "https://quill-eight.vercel.app/",
  },
  {
    id: 6,
    title: "Price Wise",
    image: "/projects/priceWise.png",
    urlGithub: "https://github.com/catomas/PriceWise",
    urlDemo: "https://price-wise-delta.vercel.app/",
  },
];

export const dataExperience = [
  {
    id: 1,
    title: "Frontend Development  💄",
    experience: [
      {
        name: "HTML",
        icon: <FaHtml5 size={24} />,
        value: 80,
      },
      {
        name: "CSS",
        icon: <FaCss3Alt size={24} />,

        value: 75,
      },
      {
        name: "JavaScript",
        icon: <RiJavascriptFill size={24} />,

        value: 80,
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss size={24} />,
        value: 75,
      },
      {
        name: "React",
        icon: <FaReact size={24} />,
        value: 65,
      },
      {
        name: "Next JS",
        icon: <TbBrandNextjs size={24} />,
        value: 80,
      },
      {
        name: "Angular",
        icon: <FaAngular size={24} />,
        value: 50,
      },
      {
        name: "TypeScript",
        icon: <BiLogoTypescript size={24} />,
        value: 80,
      },
    ],
  },
  {
    id: 2,
    title: "Backend Development  🥷",
    experience: [
      {
        name: "Node JS",
        icon: <FaNodeJs size={24} />,
        value: 70,
      },
      {
        name: "Mongo DB",
        icon: <SiMongodb size={24} />,
        value: 70,
      },
      {
        name: "Python",
        icon: <FaPython size={24} />,
        value: 60,
      },
      {
        name: "MySQL",
        icon: <GrMysql size={24} />,
        value: 60,
      },
      {
        name: "Firebase",
        icon: <IoLogoFirebase size={24} />,
        value: 40,
      },
      {
        name: "Express",
        icon: <SiExpress size={24} />,
        value: 60,
      },
      {
        name: "Next JS",
        icon: <TbBrandNextjs size={24} />,
        value: 80,
      },
    ],
  },
  {
    id: 3,
    title: "DevOps  🚀",
    experience: [
      {
        name: "Docker",
        icon: <FaDocker size={24} />,
        value: 50,
      },

      {
        name: "Bitbucket",
        icon: <FaBitbucket size={24} />,
        value: 80,
      },
      {
        name: "Git/Github",
        icon: <IoLogoGithub size={24} />,
        value: 80,
      },
      {
        name: "SourceTree",
        icon: <FaSourcetree size={24} />,
        value: 80,
      },
    ],
  },
  {
    id: 4,
    title: "Others  🎨",
    experience: [
      {
        name: "Figma",
        icon: <FaFigma size={24} />,
        value: 80,
      },
      {
        name: "Unity",
        icon: <FaUnity size={24} />,
        value: 75,
      },
      {
        name: "C#",
        value: 60,
      },
    ],
  },
];

export const dataServices = [
  [
    {
      id: 1,
      title: "UI/UX Design",
      icon: <Brush />,
      features: [
        {
          name: "Diseño intuitivo para una experiencia de usuario fluida",
        },
        {
          name: "Prototipado interactivo para visualizar la interfaz",
        },
        {
          name: "Investigación de usuarios para comprender necesidades y expectativas",
        },
        {
          name: "Optimización de la usabilidad para mejorar la accesibilidad",
        },
        {
          name: "Pruebas de usabilidad para evaluar la experiencia",
        },
        {
          name: "Diseño responsive para adaptarse a diferentes dispositivos",
        },
      ],
    },
    {
      id: 2,
      title: "Desarrollo Web",
      icon: <PanelsTopLeft />,
      features: [
        {
          name: "Desarrollo de sitios web personalizados",
        },
        {
          name: "Diseño y desarrollo responsive",
        },
        {
          name: "Optimización SEO",
        },
        {
          name: "Desarrollo de aplicaciones web",
        },
        {
          name: "Gestión de contenido",
        },
        {
          name: "Comercio electrónico",
        },
        {
          name: "Mantenimiento y soporte continuo",
        },
        {
          name: "Integración de sistemas",
        },
        {
          name: "Migración de plataformas",
        },
      ],
    },
    {
      id: 3,
      title: "Desarrollo Móvil",
      icon: <TabletSmartphone />,
      features: [
        {
          name: "Desarrollo de aplicaciones móviles personalizadas",
        },
        {
          name: "Desarrollo de aplicaciones móviles multiplataforma (iOS, Android)",
        },
        {
          name: "Optimización de rendimiento y velocidad",
        },

        {
          name: "Seguridad robusta y protección de datos del usuario",
        },
        {
          name: "Pruebas exhaustivas de calidad y garantía de funcionamiento",
        },
        {
          name: "Mantenimiento y soporte continuo",
        },
        {
          name: "Integración de sistemas de terceros (APIs, servicios en la nube, etc.)",
        },
      ],
    },
  ],
  [
    {
      id: 1,
      title: "UI/UX Design",
      icon: <Brush />,
      features: [
        {
          name: "Intuitive design for a seamless user experience",
        },
        {
          name: "Interactive prototyping to visualize the interface",
        },
        {
          name: "User research to understand needs and expectations",
        },
        {
          name: "Usability optimization to improve accessibility",
        },
        {
          name: "Usability testing to evaluate the experience",
        },
        {
          name: "Responsive design to adapt to different devices",
        },
      ],
    },
    {
      id: 2,
      title: "Web Development",
      icon: <PanelsTopLeft />,
      features: [
        {
          name: "Development of custom websites",
        },
        {
          name: "Design and development responsive",
        },
        {
          name: "SEO optimization",
        },
        {
          name: "Web application development",
        },
        {
          name: "Content management",
        },
        {
          name: "E-commerce",
        },
        {
          name: "Continuous maintenance and support",
        },
        {
          name: "System integration",
        },
        {
          name: "Platform migration",
        },
      ],
    },
    {
      id: 3,
      title: "Mobile Development",
      icon: <TabletSmartphone />,
      features: [
        {
          name: "Development of custom mobile applications",
        },
        {
          name: "Development of cross-platform mobile applications (iOS, Android)",
        },
        {
          name: "Performance and speed optimization",
        },

        {
          name: "Robust security and user data protection",
        },
        {
          name: "Comprehensive quality testing and performance guarantee",
        },
        {
          name: "Continuous maintenance and support",
        },
        {
          name: "Integration of third-party systems (APIs, cloud services, etc.)",
        },
      ],
    },
  ],
];

export const dataContact = [
  {
    id: 1,
    title: "Teléfono",
    subtitle: "+54 316 246 97 82",
    link: "tel:+34677666633",
    icon: <Phone />,
  },
  {
    id: 2,
    title: "Github",
    subtitle: "https://github.com/catomas",
    link: "https://github.com/catomas",
    icon: <Code2 />,
  },
  {
    id: 3,
    title: "Email",
    subtitle: "juancami98.11@hotmail.com",
    link: "mailto:juancami98.11@hotmail.com",
    icon: <Inbox />,
  },
];
