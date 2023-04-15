import { Toaster } from "react-hot-toast";
import Home from "../components/Home";
import About from "../components/About";
import Project from "../components/Project";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const IndexPage = () => {
  return (
    <div className="w-screen overflow-hidden">
      <Toaster />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default IndexPage;
