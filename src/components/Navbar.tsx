import { useState } from "react";
import { Menu} from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="">
      <nav className="max-w-7xl mx-auto pt-8">
        <div className="flex items-center justify-between">
          {/* Logo */}

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 rtl:space-x-reverse items-center justify-between">
            <div className="ml-10">
              <img
                className="motion-preset-bounce motion-duration-1000"
                src="./src/assets/images/logo.png"
                width={150}
              />
            </div>
            <div className="hover:shadow-[inset_0_-1px_0_0_rgba(55,175,176,0.8)]">
              <a href="#home" className="text-white pb-1">
                الرئيسية
              </a>
            </div>
            <div className="hover:shadow-[inset_0_-1px_0_0_rgba(55,175,176,0.8)]">
              <a href="#home" className="text-white pb-1">
                لماذا BauHaus
              </a>
            </div>
            <div className="hover:shadow-[inset_0_-1px_0_0_rgba(55,175,176,0.8)]">
              <a href="#home" className="text-white pb-1">
                خدماتنا
              </a>
            </div>
            <div className="hover:shadow-[inset_0_-1px_0_0_rgba(55,175,176,0.8)]">
              <a href="#home" className="text-white pb-1">
                عن BauHaus
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center gap-2">
            <a
              href="#contact"
              className="relative text-white font-light transition-all border border-slate-500 rounded-full px-4 py-1 flex flex-row-reverse items-center space-x-reverse space-x-2"
            >
              07803379083
              {/* Blinking dot */}
              <span className="relative flex h-2 w-2 ml-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
            </a>

            <a
              href="#contact"
              className="text-white font-light  transition-all border border-slate-500 rounded-full px-2 py-1"
            >
              Hi@bauhus.com
            </a>
          </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute flex flex-col items-center space-y-4 py-8 left-6 right-6 bg-gray-100 drop-shadow-xl rounded-lg">
            <a href="#home" className="text-black">
              Home
            </a>
            <a href="#about" className="text-black">
              About
            </a>
            <a href="#services" className="text-black">
              Services
            </a>
            <a href="#contact" className="text-black">
              Contact
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
