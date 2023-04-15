import { BsGithub } from "react-icons/bs";

const Footer = () => {
  const footerClassName = `
    bg-[#333333]
    w-full
    text-white
    text-center
    flex
    flex-col
    gap-2
    justify-center
    py-4
    mb-[52px]
    lg:mb-auto
  `;
  return (
    <footer className={footerClassName}>
      <p>
        &#169; 2023 Copyright. Made by{" "}
        <a
          href="https://github.com/galaxiaX"
          target="_blank"
          rel="noopener noreferrer"
        >
          galaxiaX
        </a>
      </p>
      <a
        href="https://github.com/galaxiaX/portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-600 hover:underline text-sm flex justify-center items-center gap-2 hover:scale-105 duration-200"
      >
        <BsGithub />
        <p>Source code of this site</p>
      </a>
    </footer>
  );
};

export default Footer;
