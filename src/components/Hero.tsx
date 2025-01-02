import { ArrowUpRight01Icon } from "hugeicons-react";

const Hero = () => {
  return (
    <section className="container mx-auto md:bg-[url('./src/assets/images/cover.png')] bg-cover bg-center">
      <div className=" flex flex-col md:flex-row h-[calc(100vh-10rem)]">

        <div className="flex flex-col pt-16 pr-12 space-y-8  md:w-2/3">
          <h1 className="bg-gradient-to-r from-[#bcdbdb] to-[#eaf0ed] bg-clip-text pb-4 text-xl font-light tracking-wide text-transparent md:text-4xl">
            ابدا رحلتك في العثور على
          </h1>
          <h1 className="bg-gradient-to-r from-[#37afb0] to-[#eaf0ed] bg-clip-text pb-2 text-xl font-bold tracking-wide text-transparent md:text-4xl">
            العقار المناسب باستخدام ادوات
          </h1>
          <h1 className="bg-gradient-to-r from-[#37afb0] to-[#eaf0ed] bg-clip-text pb-4 text-xl tracking-wide text-transparent md:text-4xl">
            البحث المتقدمة لدينا.
          </h1>
          <div className="flex flex-col items-center justify-start space-x-2 space-y-4 md:flex-row md:space-y-0 rtl:space-x-reverse">
            <a
              href="#contact"
              className="rounded-full bg-[#37afb0] px-6 py-2 text-white hover:motion-preset-flomoji-🚀"
            >
              <ArrowUpRight01Icon />
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-500 px-6 py-2 text-sm font-light text-white hover:motion-preset-confetti"
            >
              تواصل معنا
            </a>
            <a
              href="#contact"
              className="rounded-full bg-[#37afb0] px-12 py-2 text-sm font-light text-white hover:motion-preset-bounce"
            >
              اهم الصفات
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center md:w-1/3">
          <div className="relative h-[300px] w-[300px] rounded-xl">
            <div className="absolute inset-0 rounded-xl bg-black opacity-20"></div>
            <div className="absolute left-6 right-6 top-12 flex h-12 flex-row items-center rounded-full bg-secondary2">
              <img
                className="mx-2 size-10 rounded-full"
                src="./src/assets/images/avater.jpg"
                alt=""
              />
              <h1 className="text-black">افضل صفقة</h1>
            </div>
            <div className="absolute inset-0 flex flex-col justify-end space-y-0">
              <p className="px-6 text-sm font-light">
                شركة pauHaus كانت تجربتي معهم جيدة جداً وكانت صفقة شراء مهمة
                جداً بالنسبة لي
              </p>
              <p className="leading-0 p-8 text-left text-3xl text-red-500">
                $2.6 M
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-end justify-center h-16 mb-8 md:bg-[url('./src/assets/images/margin.png')] bg-cover bg-center">
      </div>
    </section>
  );
};
export default Hero;
