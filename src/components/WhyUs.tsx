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

      <div className="flex items-center justify-center gap-3">
        <div className="w-1/3 h-[220px] bg-gradient-to-tr from-black to-darkBlue rounded-xl border border-mediumBlue rounded-tl-[2em_5em]">
          <div className="flex flex-col items-center justify-center text-center mt-6">
            <img
              src="./src/assets/images/feature-icon-01.png"
              alt=""
              width="70px"
            />
            <h2 className="text-white text-xl pt-3">فريق محترف</h2>
            <p className="text-white text-sm font-thin pt-4 px-2">
              مستشارون عقاريون ذوو خبرة ومعرفة عميقة بالسوق
            </p>
          </div>
        </div>

        <div className="w-1/3 h-[220px] bg-gradient-to-tl from-black to-darkBlue rounded-xl border border-mediumBlue rounded-tr-[2em_5em]">
          <div className="flex flex-col items-center justify-center text-center mt-6">
            <img
              src="./src/assets/images/feature-icon-02.png"
              alt=""
              width="70px"
            />
            <h2 className="text-white text-xl  pt-3">شفافية ونزاهة</h2>
            <p className="text-white text-sm font-thin pt-4 px-2 text-center">
              التزامنا بأعلى معايير النزاهة والشفافية في كل تعاملاتنا
            </p>
          </div>
        </div>

        <div className="w-1/3 h-[220px] bg-gradient-to-tr from-black to-darkBlue rounded-xl border border-mediumBlue rounded-tl-[2em_5em]">
          <div className="flex flex-col items-center justify-center text-center mt-6">
            <img
              src="./src/assets/images/feature-icon-03.png"
              alt=""
              width="70px"
            />
            <h2 className="text-white text-xl pt-3 ">شبكة واسعة</h2>
            <p className="text-white text-sm font-thin pt-4 px-2 text-center">
              علاقات قوية مع المطورين والوسطاء لضمان أفضل الصفقات
            </p>
          </div>
        </div>
        <div className="w-1/3 h-[220px] bg-gradient-to-tl from-black to-darkBlue  border border-mediumBlue rounded-xl rounded-tr-[2em_5em]">
          <div className="flex flex-col items-center justify-center text-center mt-6">
            <img
              src="./src/assets/images/feature-icon-04.png"
              alt=""
              width="70px"
            />
            <h2 className="text-white text-xl pt-3">خبرة طويلة</h2>
            <p className="text-white text-sm font-thin pt-4 px-2 text-center ">
              سنوات من الخبرة في السوق العقاري المحلي والدولي
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyUs;
