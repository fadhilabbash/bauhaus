import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu01Icon } from "hugeicons-react";
import { Link, NavLink } from "react-router-dom";
import { links } from "../lib/staticData";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleHashNavigation = () => {
      if (location.hash) {
        const sectionId = location.hash.slice(1); 
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }
    };

    handleHashNavigation();
  }, [location]);

  return (
    <header>
      <nav className="mx-16 pt-8">
        <div className="flex items-center justify-between">
        
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-between space-x-6 rtl:space-x-reverse">
              {/* Logo */}
          <div className="ml-10">
            <img
              className="motion-preset-bounce motion-duration-1000"
              src="./src/assets/images/logo.png"
              width={150}
              alt="BauHaus Logo"
            />
          </div>

            {links.map((link, index) => (
              <div key={index} className="group">
                <NavLink
                  to={link.to}
                  className={({ isActive }) => {
                    const isHashLinkActive = link.to.startsWith("#")
                      ? window.location.hash === link.to
                      : isActive;
                    return `text-white ${isHashLinkActive ? "font-bold" : "opacity-70"}`;
                  }}
                  onClick={(e) => {
                    if (link.to.startsWith("#")) {
                      e.preventDefault(); // Prevent default NavLink behavior for hash links
                      const sectionId = link.to.slice(1); // Remove '#' symbol
                      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
                      window.history.pushState(null, "", link.to); // Update URL hash
                    }
                  }}
                >
                  {({ isActive }) => {
                    const isHashLinkActive = link.to.startsWith("#")
                      ? window.location.hash === link.to
                      : isActive;
                    return (
                      <>
                        {link.title}
                        <div
                          className={`h-[1.5px] bg-gradient-to-r from-transparent via-primary to-transparent transition-opacity duration-300 ${
                            isHashLinkActive
                              ? "opacity-100"
                              : "opacity-0 group-hover:opacity-100"
                          }`}
                        ></div>
                      </>
                    );
                  }}
                </NavLink>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="hidden md:flex items-center justify-center gap-2">
            <a
              href="#contact"
              className="relative flex flex-row-reverse items-center space-x-2 space-x-reverse rounded-full border border-slate-500 px-4 py-1 font-light text-white transition-all"
            >
              07803379083
              {/* Blinking Dot */}
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
        {isMobileMenuOpen && (
          <div className="absolute left-6 right-6 flex flex-col items-center space-y-4 rounded-lg bg-gray-100 py-8 drop-shadow-xl md:hidden">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="text-black"
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
              >
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
