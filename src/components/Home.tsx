import useScrollReveal from "../hooks/useScrollReveal ";
import MouseScrollDown from "./MouseScrollDown";
import NavBar from "./NavBar";
import { useRef } from "react";

const Home = () => {
  const revealLeft = useRef(null);
  const revealRight = useRef(null);
  const revealBottom = useRef(null);

  useScrollReveal(revealLeft);
  useScrollReveal(revealRight, { origin: "right", delay: 1000 });
  useScrollReveal(revealBottom, { origin: "bottom", delay: 5000 });

  return (
    <header
      id="home"
      className="h-screen w-full flex justify-center items-center relative"
    >
      <NavBar />
      <div className="text-[#272341] text-5xl sm:text-6xl font-bold w-3/4">
        <div ref={revealLeft}>
          <h1 className="flex flex-wrap gap-x-4 sm:items-start hover:scale-110 duration-200">
            <span>Hi,</span>
            <span>I'm</span>
            <span className="text-[#02aeaf]">Namo</span>
            <img
              src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
              className="h-14 aspect-square -mt-2 lg:-mt-0"
              loading="lazy"
            />
          </h1>
        </div>
        <div ref={revealRight}>
          <h2 className="hover:scale-110 duration-200">I'm a Web Developer.</h2>
        </div>
      </div>
      <div ref={revealBottom} className="absolute bottom-8 lg:bottom-0">
        <MouseScrollDown />
      </div>
    </header>
  );
};

export default Home;
