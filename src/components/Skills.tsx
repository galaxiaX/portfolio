import { IconType } from "react-icons";
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiReact,
  SiNextdotjs,
  SiMongodb,
  SiPrisma,
  SiGit,
  SiGithub,
} from "react-icons/si";

export type SkillsProps = {
  skill: string;
  icon: IconType;
  iconColor: string;
};

const skills: SkillsProps[] = [
  {
    skill: "HTML",
    icon: SiHtml5,
    iconColor: "#E44D26",
  },
  {
    skill: "CSS",
    icon: SiCss3,
    iconColor: "#1572B6",
  },
  {
    skill: "SASS",
    icon: SiSass,
    iconColor: "#CB6699",
  },
  {
    skill: "Tailwind",
    icon: SiTailwindcss,
    iconColor: "#38BDF8",
  },
  {
    skill: "JavaScript",
    icon: SiJavascript,
    iconColor: "#F0DB4f",
  },
  {
    skill: "TypeScript",
    icon: SiTypescript,
    iconColor: "#007ACC",
  },
  {
    skill: "Node.js",
    icon: SiNodedotjs,
    iconColor: "#83CD29",
  },
  {
    skill: "Express",
    icon: SiExpress,
    iconColor: "#000000",
  },
  {
    skill: "React",
    icon: SiReact,
    iconColor: "#61DAFB",
  },
  {
    skill: "Next.js",
    icon: SiNextdotjs,
    iconColor: "#000000",
  },
  {
    skill: "MongoDB",
    icon: SiMongodb,
    iconColor: "#07AB4F",
  },
  {
    skill: "Prisma",
    icon: SiPrisma,
    iconColor: "#000000",
  },
  {
    skill: "Git",
    icon: SiGit,
    iconColor: "#F34F29",
  },
  {
    skill: "GitHub",
    icon: SiGithub,
    iconColor: "#000000",
  },
];

export default skills;
