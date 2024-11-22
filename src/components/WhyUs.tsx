import MainTitle from "./MainTitle";

const WhyUs = () => {
  return (
    <section className="custom-container">
      <MainTitle
        title="لماذا تختار BauHaus؟"
        subtitle="نحن نتميز بخبرتنا الواسعة وفريقنا المحترف، مما يجعلنا الخيار الأول للعملاء الباحثين عن الجودة والموثوقية."
        containerClassName="bg-none items-center text-center py-8"
        titleClassName="text-primary"
        subtitleClassName="text-white text-thin w-1/2"
      />

      <div className="flex flex-col items-center justify-center gap-3 space-y-12 md:flex-row">
        <div className="h-[220px] w-full rounded-xl rounded-tl-[2em_5em] border border-mediumBlue bg-gradient-to-tr from-black to-darkBlue md:w-1/3">
          <div className="mt-6 flex flex-col items-center justify-center text-center">
            <img
              src="./src/assets/images/feature-icon-01.png"
              alt=""
              width="70px"
            />
            <h2 className="pt-3 text-xl text-white">فريق محترف</h2>
            <p className="px-2 pt-4 text-sm font-thin text-white">
              مستشارون عقاريون ذوو خبرة ومعرفة عميقة بالسوق
            </p>
          </div>
        </div>

        <div className="h-[220px] w-full rounded-xl rounded-tr-[2em_5em] border border-mediumBlue bg-gradient-to-tl from-black to-darkBlue md:w-1/3">
          <div className="mt-6 flex flex-col items-center justify-center text-center">
            <img
              src="./src/assets/images/feature-icon-02.png"
              alt=""
              width="70px"
            />
            <h2 className="pt-3 text-xl text-white">شفافية ونزاهة</h2>
            <p className="px-2 pt-4 text-center text-sm font-thin text-white">
              التزامنا بأعلى معايير النزاهة والشفافية في كل تعاملاتنا
            </p>
          </div>
        </div>

        <div className="h-[220px] w-full rounded-xl rounded-tl-[2em_5em] border border-mediumBlue bg-gradient-to-tr from-black to-darkBlue md:w-1/3">
          <div className="mt-6 flex flex-col items-center justify-center text-center">
            <img
              src="./src/assets/images/feature-icon-03.png"
              alt=""
              width="70px"
            />
            <h2 className="pt-3 text-xl text-white">شبكة واسعة</h2>
            <p className="px-2 pt-4 text-center text-sm font-thin text-white">
              علاقات قوية مع المطورين والوسطاء لضمان أفضل الصفقات
            </p>
          </div>
        </div>
        <div className="h-[220px] w-full rounded-xl rounded-tr-[2em_5em] border border-mediumBlue bg-gradient-to-tl from-black to-darkBlue md:w-1/3">
          <div className="mt-6 flex flex-col items-center justify-center text-center">
            <img
              src="./src/assets/images/feature-icon-04.png"
              alt=""
              width="70px"
            />
            <h2 className="pt-3 text-xl text-white">خبرة طويلة</h2>
            <p className="px-2 pt-4 text-center text-sm font-thin text-white">
              سنوات من الخبرة في السوق العقاري المحلي والدولي
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyUs;
