import useScrollReveal from "../hooks/useScrollReveal ";
import SkillCard from "./SkillCard";
import skills from "./Skills";
import { useRef } from "react";

const About = () => {
  const revealTop = useRef(null);
  const revealLeft = useRef(null);
  const revealRight = useRef(null);

  useScrollReveal(revealTop, { origin: "top", delay: 0, duration: 1000 });
  useScrollReveal(revealLeft);
  useScrollReveal(revealRight, { origin: "right", delay: 800 });

  return (
    <div id="about" className="min-h-screen w-full bg-[#02aeaf]">
      <div className="pt-12 lg:pt-20 flex flex-col items-center">
        <div ref={revealTop}>
          <h2 className="text-5xl mb-8 sm:mb-14 font-bold text-white text-center hover:scale-105 duration-200">
            ABOUT ME
          </h2>
        </div>
        <div className="w-5/6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div ref={revealLeft}>
            <h2 className="text-3xl text-center font-bold w-full mb-4 lg:mb-8 text-white hover:scale-105 duration-200">
              My Background
            </h2>
            <p className="text-white font-medium lg:text-lg indent-8 lg:indent-16 leading-8 lg:hover:scale-105 duration-200">
              Hello, I'm a self-taught web developer on a mission to turn my
              passion into a profession. I've been honing my skills in the
              <b> MERN </b>
              stack and have created a few projects with it.
            </p>
            <p className="text-white font-medium lg:text-lg indent-8 lg:indent-16 leading-8 lg:hover:scale-105 duration-200">
              My main focus is on constantly learning new things, especially in
              <b> responsive design </b>
              and
              <b> clean code </b>
              practices. I enjoy sharing my knowledge with others and love
              collaborating on projects. I'm currently seeking a web development
              job where I can continue to grow and develop my skills further.
            </p>
            <a
              href="https://drive.google.com/file/d/1Bq9dJHYf3GsnVVZZeQhYX_j-e2Q3MTxo/view?usp=sharing"
              target="_blank"
              className="slide inline-flex float-right lg:float-left mt-8 border-4 border-white duration-300 text-white hover:text-[#02aeaf] font-bold py-2 px-6"
            >
              Resume
            </a>
          </div>
          <div ref={revealRight} className="flex flex-col items-center">
            <h2 className="text-3xl font-bold w-full mb-8 text-white text-center hover:scale-105 duration-200">
              My Skills
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 w-full gap-4 mb-16">
              {skills.map((skill) => (
                <SkillCard
                  key={skill.skill}
                  skill={skill.skill}
                  icon={skill.icon}
                  iconColor={skill.iconColor}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
