import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container mx-auto p-12 space-x-6 rtl:space-x-reverse flex flex-col md:flex-row">
        <div className="md:w-1/2 flex flex-col justify-center space-y-6 py-8">
          <h1 className="tracking-wide text-xl md:text-4xl font-light  text-transparent bg-clip-text bg-gradient-to-r from-[#bcdbdb] to-[#eaf0ed] pb-4">
            ابدا رحلتك في العثور على
          </h1>
          <h1 className="tracking-wide font-bold text-xl md:text-4xl  text-transparent bg-clip-text bg-gradient-to-r from-[#37afb0] to-[#eaf0ed] pb-2">
            العقار المناسب باستخدام ادوات
          </h1>
          <h1 className="tracking-wide text-xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#37afb0] to-[#eaf0ed] pb-4">
            البحث المتقدمة لدينا.
          </h1>
          <div className="flex items-center flex-col  justify-start space-y-4 md:flex-row md:space-y-0 space-x-2 rtl:space-x-reverse">
            <a
              href="#contact"
              className="text-white  bg-[#37afb0] rounded-full py-2 px-6 hover:motion-preset-flomoji-🚀"
            >
              <ArrowUpRight />
            </a>
            <a
              href="#contact"
              className="text-white text-sm font-light border border-slate-500 rounded-full py-2 px-6 hover:motion-preset-confetti"
            >
              تواصل معنا
            </a>
            <a
              href="#contact"
              className="text-white text-sm font-light bg-[#37afb0] rounded-full py-2 px-12 hover:motion-preset-bounce"
            >
              اهم الصفات
            </a>
          </div>
        </div>
    
        <div className="md:w-1/2 flex flex-col items-end justify-between">
          <div className="relative h-[300px] w-[300px] rounded-xl">
            <div className="absolute inset-0 bg-darkBlue opacity-30 rounded-xl"></div>
            <div className="absolute left-6 right-6 top-12 h-12 bg-secondary2 rounded-full flex flex-row items-center">
             
              <img className="mx-2 size-10 rounded-full" src="./src/assets/images/avater.jpg" alt="" />
              <h1 className="text-black">افضل صفقة</h1>
            </div>
            <div className="flex flex-col space-y-0 justify-end absolute inset-0">
              <p className="px-6 font-light text-sm">
                شركة pauHaus كانت تجربتي معهم جيدة جداً وكانت صفقة شراء مهمة
                جداً بالنسبة لي
              </p>
              <p className="text-left p-8 text-red-500 text-3xl leading-0">
                $2.6 M
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <img src="./src/assets/images/margin.png"/>
      </div>
    </section>
  );
};
export default Hero;
