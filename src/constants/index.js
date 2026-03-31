import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiAntdesign,
  SiDaisyui,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const navbarItems = [
  { id: 1, name: "Home", scroll: "#Home" },
  { id: 2, name: "Project", scroll: "#Project" },
  { id: 3, name: "Work", scroll: "#Work" },
];

export const skillS = [
  {
    id: 1,
    cates: "Frontend Development",
    items: [
      { name: "JavaScript", icon: IoLogoJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: RiNextjsFill },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Ant Design", icon: SiAntdesign },
      { name: "Shadcn UI", icon: SiShadcnui },
      { name: "Daisy UI", icon: SiDaisyui },
    ],
  },
  {
    id: 2,
    cates: "Backend Development",
    items: [
      { name: "NodeJs", icon: SiNodedotjs },
      { name: "ExpressJs", icon: SiExpress },
    ],
  },
  {
    id: 3,
    cates: "Databases",
    items: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
  {
    id: 4,
    cates: "Tools",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Prisma ORM", icon: SiPrisma },
      { name: "Docker", icon: SiDocker },
    ],
  },
];

export const projectItems = [
  {
    id: 1,
    title: "Penjadwalan Rapat DPRD Provinsi Sulawesi Tengah",
    status: "In Progress",
    desc: "a meeting scheduling web application using React.js, Node.js, and PostgreSQL. Implementing two algorithms, there are Greedy Algorithm for detecting schedule conflicts and Decision Algorithm (rule based) for recommending alternative schedules when conflicts occur",
    tech: [
      {name: "React"},
      {name: "Next Js"},
      {name: "JavaScript"},
      {name: "Shadcn UI"},
      {name: "Tailwind CSS"},
      {name: "Node Js"},
      {name: "Express Js"},
    ],
    img: "/dprd.png",
    link: "https://github.com/dprd-prov-sulteng-2025/schedule-admin-new.git"
  },
  {
    id: 2,
    title: "Recyeco Mart",
    status: "Finished",
    desc: " a web-based marketplace platform for buying and selling recycled waste to support sustainable waste management.this project is collaborated with a team to design and build the application, contributing primarily to front-end development.",
    tech: [
      {name: "React"},
      {name: "Next Js"},
      {name: "TypeScript"},
      {name: "Shadcn UI"},
      {name: "Tailwind CSS"},
      {name: "Tanstack"},
      {name: "Zod"},
      {name: "Zustand"},
    ],
    img: "/recyeco.jpeg",
    link: "https://recyeco-fe.vercel.app/"
  },
  {
    id: 3,
    title: "Nusadaya (IT COM Web App Competition – 1st Place)",
    status: "Finished",
    desc: " a web-based learning platform focused on Indonesian culture. this project is collaborated with a team in developing the application, contributing to front-end implementation and UI development",
    tech: [
      {name: "React"},
      {name: "Next Js"},
      {name: "TypeScript"},
      {name: "Shadcn UI"},
      {name: "Tailwind CSS"},
    ],
    img: "/nusadaya.png",
    link: "https://nusadaya-fe.vercel.app/"
  },
]
