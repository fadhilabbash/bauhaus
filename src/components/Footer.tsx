import {
  InstagramIcon,
  PinterestIcon,
  Linkedin01Icon,
  TwitterIcon,
  WhatsappIcon,
} from "hugeicons-react";
import { links } from "../lib/staticData";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col justify-between py-10 text-white md:flex-row">
        <div className="mr-12 flex w-1/3 flex-col items-start justify-between space-y-12 md:space-y-2">
          <img
            className="h-10"
            src="./src/assets/images/logoFooter.png"
            alt="logo"
          />

          <div className="w-1/2 text-sm font-thin tracking-tighter">
            <p>
              بتقديم أفضل الخدمات العقارية، مع التركيز على تلبية جميع احتياجات
              عملائنا وتطلعاتهم.
            </p>
          </div>
        </div>

        <div className="item-center flex w-1/3 justify-center space-x-12 text-sm rtl:space-x-reverse">
          <div className="flex flex-col space-y-2">
            {links.map((link, index) => (
              <Link
                key={index}
                className="hover:text-slate-300"
                to={link.to}
                onClick={(e) => {
                  if (link.to.startsWith("#")) {
                    e.preventDefault(); // Prevent default NavLink behavior for hash links
                    const sectionId = link.to.slice(1); // Remove '#' symbol
                    document
                      .getElementById(sectionId)
                      ?.scrollIntoView({ behavior: "smooth" });
                    window.history.pushState(null, "", link.to); // Update URL hash
                  }
                }}
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="hover:text-slate-300">
              تواصل معنا عبر المنصات التالية
            </h2>
            <div className="flex space-x-6 rtl:space-x-reverse">
              <InstagramIcon color="#37afb0" />
              <PinterestIcon color="#37afb0" />
              <Linkedin01Icon color="#37afb0" />
              <TwitterIcon color="#37afb0" />
              <WhatsappIcon color="#37afb0" />
            </div>
          </div>
        </div>

        <div className="ml-12 flex w-1/3 flex-col items-end justify-between">
          <div className="hidden md:block">هل لديك استفسار</div>
          <button className="rounded-full bg-primary px-6 py-2 hover:bg-slate-500">
            تواصل معنا
          </button>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
