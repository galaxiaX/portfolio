const NavBar = () => {
  const aClassName = `
    text-center
    py-4
    lg:px-6
    block
    hover:bg-[#02aeaf]
    transition-all
    duration-200
    hover:text-white
    lg:border-b-4
    border-white
    border-opacity-0
    hover:border-opacity-100
  `;

  const ulClassName = `
    grid
    grid-cols-4
    lg:flex
    w-full
    lg:w-auto
    lg:float-right
    text-slate-500
    bg-white
    lg:bg-transparent
    font-semibold
    text-sm
  `;

  const navMenu = [
    {
      href: "#home",
      text: "Home",
    },
    {
      href: "#about",
      text: "About",
    },
    {
      href: "#projects",
      text: "Projects",
    },
    {
      href: "#contact",
      text: "Contact",
    },
  ];

  return (
    <nav className="fixed bottom-0 z-10 lg:bottom-auto lg:top-0 w-screen lg:w-full">
      <ul className={ulClassName}>
        {navMenu.map((menu) => (
          <li key={menu.text}>
            <a href={menu.href} className={aClassName}>
              {menu.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
