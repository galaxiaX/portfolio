import useScrollReveal from "../hooks/useScrollReveal ";
import ProjectCard from "./ProjectCard";
import { useRef } from "react";

const Project = () => {
  const projects = [
    {
      name: "HouseHost",
      img: "https://ik.imagekit.io/galaxia/househost.jpg?updatedAt=1681087556618",
      link: "https://househost.vercel.app",
      srcCode: "https://github.com/galaxiaX/househost-front",
      stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
      description: `"HouseHost" is a fully functional Airbnb clone that allows users 
      to register, create listings for rental properties, add photos, browse and 
      reserve spaces, and manage their reservations. Built using MERN, Tailwind, 
      and AWS S3.`,
    },
    {
      name: "JustTweet",
      img: "https://ik.imagekit.io/galaxia/justtweet.jpg?updatedAt=1681087548772",
      link: "https://justtweet.vercel.app",
      srcCode: "https://github.com/galaxiaX/next-justtweet",
      stack: ["TypeScript", "Next.js", "Tailwind", "MongoDB", "Prisma"],
      description: `"Justtweet" is a Twitter clone built with TypeScript, 
      Next.js, Tailwind, Prisma, MongoDB, and NextAuth. Users can register and 
      log in, follow others, like and comment on tweets, and modify their profile 
      information including their name, bio, and images. It has a clean UI, and is 
      performant, scalable, and secure.`,
    },
    {
      name: "Weather",
      img: "https://ik.imagekit.io/galaxia/weather.jpg?updatedAt=1681087552072",
      link: "https://liveweather-next.vercel.app",
      srcCode: "https://github.com/galaxiaX/next-weather-app",
      stack: ["Next.js", "SASS"],
      description: `"Weather" is a Next.js and SASS based project 
      that uses the OpenWeather API to display current, hourly, and daily weather data 
      for a city entered by the user. The interface is clean and simple, with easy-to-read 
      data including temperature, humidity, and wind speed.`,
    },
  ];

  const revealTop = useRef(null);

  useScrollReveal(revealTop, { origin: "top", delay: 0, duration: 1000 });

  return (
    <div id="projects" className="w-full bg-white">
      <div className="pt-12 lg:pt-20 lg:w-5/6 mx-auto">
        <div ref={revealTop}>
          <h2 className="text-5xl font-bold mb-8 lg:mb-16 text-[#272341] text-center hover:scale-105 duration-200">
            PROJECTS
          </h2>
        </div>
        <div className="flex flex-col gap-16 mb-20">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              name={project.name}
              img={project.img}
              link={project.link}
              srcCode={project.srcCode}
              stack={project.stack}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
