import useScrollReveal from "../hooks/useScrollReveal ";
import skills, { SkillsProps } from "./Skills";
import { BiLinkExternal } from "react-icons/bi";
import { SiGithub } from "react-icons/si";
import { useRef } from "react";

type ProjectCardProps = {
  index: number;
  name: string;
  img: string;
  link: string;
  srcCode: string;
  stack: string[];
  description: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  index = 0,
  name,
  img,
  link,
  srcCode,
  stack,
  description,
}) => {
  const revealImage = useRef(null);
  const revealDescription = useRef(null);

  if (index % 2 === 1) {
    useScrollReveal(revealImage, { origin: "left" });
  } else {
    useScrollReveal(revealImage, { origin: "right" });
  }

  if (index % 2 === 1) {
    useScrollReveal(revealDescription, { origin: "left" });
  } else {
    useScrollReveal(revealDescription, { origin: "right" });
  }

  return (
    <div className="lg:grid lg:grid-cols-[3fr_2fr] gap-6 lg:h-auto">
      <div ref={revealImage}>
        <a href={link} target="_blank">
          <img
            src={img}
            loading="lazy"
            className="w-full max-w-md lg:max-w-full hover-scale hover:scale-105"
          />
        </a>
      </div>
      <div ref={revealDescription}>
        <div className="p-8 pt-4 flex flex-col h-full justify-between hover-scale">
          <div>
            <h3 className="text-3xl font-bold mb-4">{name}</h3>
            <p className="leading-7 indent-8">{description}</p>
          </div>

          <div>
            <div className="my-4 flex gap-2 p-2 font-semibold text-xl">
              <h4>Stack : </h4>
              {stack.map((item) => {
                const skill: SkillsProps | undefined = skills.find(
                  (s) => s.skill === item
                );
                return skill ? (
                  <div
                    key={skill.skill}
                    className="hover:-translate-y-1 duration-200"
                  >
                    <skill.icon color={skill.iconColor} size={32} />
                  </div>
                ) : null;
              })}
            </div>
            <div className="grid grid-cols-2 gap-2 lg:gap-4 font-semibold">
              <a
                href={srcCode}
                target="_blank"
                className="p-3 border border-black offset duration-200 hover:text-white inline-flex gap-2 justify-center"
              >
                <SiGithub size={24} />
                Code
              </a>

              <a
                href={link}
                target="_blank"
                className="p-3 border border-black offset duration-200 hover:text-white inline-flex gap-2 justify-center"
              >
                <BiLinkExternal size={24} />
                Live
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
