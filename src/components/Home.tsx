import useScrollReveal from "../hooks/useScrollReveal ";
import NavBar from "./NavBar";
import { useRef } from "react";

const Home = () => {
  const revealLeft = useRef(null);
  const revealRight = useRef(null);

  useScrollReveal(revealLeft);
  useScrollReveal(revealRight, { origin: "right" });

  return (
    <header
      id="home"
      className="h-screen w-full flex justify-center items-center"
    >
      <NavBar />
      <div className="text-[#272341] text-5xl sm:text-6xl font-bold w-3/4">
        <div ref={revealLeft}>
          <h1 className="flex flex-wrap gap-x-4 items-end- sm:items-start hover:scale-110 duration-200">
            <span>Hi,</span>
            <span>I'm</span>
            <span className="text-[#02aeaf] relative">Namo</span>
            <img
              src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
              className="h-14 aspect-square"
              loading="lazy"
            />
          </h1>
        </div>
        <div ref={revealRight}>
          <h2 className="hover:scale-110 duration-200">I'm a Web Developer.</h2>
        </div>
      </div>
    </header>
  );
};

export default Home;
