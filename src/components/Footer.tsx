import {
  InstagramIcon,
  PinterestIcon,
  Linkedin01Icon,
  TwitterIcon,
  WhatsappIcon,
} from "hugeicons-react";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row justify-between text-white py-10 ">
        <div className="w-1/3 flex flex-col space-y-12 md:space-y-2 items-start justify-between mr-12">
          <img
            className="h-10"
            src="./src/assets/images/logoFooter.png"
            alt="logo"
          />

          <div className="w-1/2 font-thin text-sm tracking-tighter">
            <p>
              بتقديم أفضل الخدمات العقارية، مع التركيز على تلبية جميع احتياجات
              عملائنا وتطلعاتهم.
            </p>
          </div>
        </div>

        <div className="w-1/3 flex item-center justify-center space-x-12 text-sm rtl:space-x-reverse">
          <div className="flex flex-col space-y-2">
            <a href="" className="hover:text-slate-300">
              الرئيسية
            </a>
            <a href="" className="hover:text-slate-300">
              الخدمات
            </a>
            <a href="" className="hover:text-slate-300">
              لماذا PauHuse
            </a>
            <a href="" className="hover:text-slate-300">
              عنا
            </a>
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

        <div className="w-1/3 flex flex-col justify-between items-end ml-12">
          <div className="hidden md:block">هل لديك استفسار</div>
          <button className="bg-primary hover:bg-slate-500 py-2 px-6 rounded-full">
            تواصل معنا
          </button>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
