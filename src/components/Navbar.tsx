import { useState } from "react";
import { Menu01Icon } from "hugeicons-react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const links = [
    { title: "الرئيسية", to: "/" },
    { title: "لماذا BauHaus", to: "/whyus" },
    { title: "خدماتنا", to: "/services" },
    { title: " عن BauHaus", to: "/about" },
  ];
  return (
    <header className="">
      <nav className="mx-auto max-w-6xl pt-8">
        <div className="flex items-center justify-between">
          {/* Logo */}

          {/* Desktop Menu */}
          <div className="hidden items-center justify-between space-x-6 md:flex rtl:space-x-reverse">
            <div className="ml-10">
              <img
                className="motion-preset-bounce motion-duration-1000"
                src="./src/assets/images/logo.png"
                width={150}
              />
            </div>
            {links.map((link, index) => (
              <div key={index} className="group">
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `text-white ${isActive ? "font-bold" : "opacity-70"}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.title}
                      <div
                        className={`h-[1.5px] bg-gradient-to-r from-transparent via-primary to-transparent transition-opacity duration-300 ${
                          isActive
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                        }`}
                      ></div>
                    </>
                  )}
                </NavLink>
              </div>
            ))}
          </div>
          <div className="hidden items-center justify-center gap-2 md:flex">
            <a
              href="#contact"
              className="relative flex flex-row-reverse items-center space-x-2 space-x-reverse rounded-full border border-slate-500 px-4 py-1 font-light text-white transition-all"
            >
              07803379083
              {/* Blinking dot */}
              <span className="relative ml-2 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
            </a>

            <a
              href="#contact"
              className="rounded-full border border-slate-500 px-2 py-1 font-light text-white transition-all"
            >
              Hi@bauhus.com
            </a>
          </div>
          {/* Mobile Menu Button */}
          <button
            className="mr-2 text-white md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu01Icon />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen &&
          links.map((link) => (
            <div className="absolute left-6 right-6 flex flex-col items-center space-y-4 rounded-lg bg-gray-100 py-8 drop-shadow-xl md:hidden">
              {/* <a href={link.href} className="text-black">
                {link.title}
              </a> */}
              <Link className="text-black" to={link.to}>
                {" "}
                {link.title}
              </Link>
            </div>
          ))}
      </nav>
    </header>
  );
};

export default Navbar;
