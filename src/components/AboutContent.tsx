 const AboutContent = () => {
  return (
    <section className="container mx-auto">
      <div>
        <div>
          <h1 className="p-16 text-4xl font-bold leading-loose tracking-wide">
            نحن في PauHaus نفخر بتقديم أفضل
            <br />
            الخدمات العقارية
          </h1>
        </div>
        <div className="h-screen w-full bg-[url('./src/assets/images/about_01.jpeg')] bg-cover bg-center"></div>
        <div className="custom-container mx-auto">
        <div className="relative w-2/3">
          <h1 className="p-16 text-4xl leading-loose tracking-wide">
            هدفنا مساعدة العميل في
            <br />
            كل خطوة
          </h1>

          <div className="absolute bottom-20 -left-32 h-24 w-64 bg-[url('./src/assets/images/aboutvec_01.png')] bg-contain bg-no-repeat"></div>
        </div>

       
          <div className="flex flex-col items-start gap-16 md:flex-row">
            <div className="relative mr-12 h-[400px] w-1/2">
              <h1 className="pb-2 text-xl font-bold tracking-wider">
                لا نتوقف عند الصعوبات
              </h1>
              <p className="w-[260px] text-sm font-thin">
                شراء العقارات والاستمثار يتطلب خبرة لأتخاذ القرار المناسب لهذا
                السبب نسعى ان نكون شريكك العقاري الأكثر ثقة واحترافية. شراء
                العقارات والاستمثار يتطلب خبرة لأتخاذ القرار المناسب لهذا السبب
                نسعى ان نكون شريكك العقاري الأكثر ثقة واحترافية.شراء العقارات
                والاستمثار يتطلب خبرة لأتخاذ القرار المناسب لهذا السبب نسعى ان
                نكون شريكك العقاري الأكثر ثقة واحترافية.
              </p>
              <div className="absolute bottom-12 left-0 h-14 w-14 bg-[url('./src/assets/images/aboutvec_02.png')] bg-contain bg-no-repeat"></div>
            </div>
            <div className="h-[400px] w-2/3 bg-[url('./src/assets/images/about_02.jpeg')] bg-cover bg-center"></div>
          </div>

          <div className="my-20 flex flex-col items-start gap-16 md:flex-row">
            <div className="h-[400px] w-2/3 bg-[url('./src/assets/images/about_03.jpeg')] bg-cover bg-center"></div>
            <div className="relative mr-12 h-[400px] w-1/2">
              <h1 className="pb-2 text-xl font-bold tracking-wider">
                نعمل لأتمام افضل الصفقات
              </h1>
              <p className="w-[260px] text-sm font-thin">
                شراء العقارات والاستمثار يتطلب خبرة لأتخاذ القرار المناسب لهذا
                السبب نسعى ان نكون شريكك العقاري الأكثر ثقة واحترافية. شراء
                العقارات والاستمثار يتطلب خبرة لأتخاذ القرار المناسب لهذا السبب
                نسعى ان نكون شريكك العقاري الأكثر ثقة واحترافية.شراء العقارات
                والاستمثار يتطلب خبرة لأتخاذ القرار المناسب لهذا السبب نسعى ان
                نكون شريكك العقاري الأكثر ثقة واحترافية.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutContent;