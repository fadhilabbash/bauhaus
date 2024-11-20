import MainTitle from "./MainTitle";

const SearchProperty = () => {
  return (
    <section className="bg-white">
      <MainTitle
        title="ابحث عن عقارك المثالي"
        subtitle="ابدأ رحلتك في العثور على العقار المناسب باستخدام أدوات البحث المتقدمة لدينا. اكتشف مجموعة واسعة من الخيارات التي تلبي جميع الاحتياجات والأذواق"
        containerClassName="bg-none items-center text-center py-8"
        titleClassName="text-black"
        subtitleClassName="text-thin w-1/2"
      />
      <div className="custom-container">
        <div className="flex items-center justify-center mx-auto border rounded-full bg-secondary py-1 px-2 w-fit">
          <button className="rounded-full py-2 px-8 text-black bg-white">
            تجاري
          </button>
          <button className="rounded-full py-2 px-8 text-black">سكني</button>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mt-12">
          <div className="h-[300px] w-full md:w-1/3 flex justify-center items-end rounded-3xl mb-12 bg-[url('https://picsum.photos/400')] bg-cover bg-center">
            <div className="w-full h-[80px] bg-white rounded-3xl mx-2 mb-2">
              <h1 className="text-black text-right pt-2 pr-2">عقار دبي مول</h1>
              <h1 className="text-black text-left pl-2 text-sm">
                صفقة <span className="text-2xl text-red-600 p-2">$2.2M</span>
              </h1>
            </div>
          </div>
          <div className="h-[300px] w-full md:w-1/3 flex justify-center items-end rounded-3xl mb-12 bg-[url('https://picsum.photos/400')] bg-cover bg-center">
            <div className="w-full h-[80px] bg-white rounded-3xl mx-2 mb-2">
              <h1 className="text-black text-right pt-2 pr-2">عقار دبي مول</h1>
              <h1 className="text-black text-left pl-2 text-sm">
                صفقة <span className="text-2xl text-red-600 p-2">$2.2M</span>
              </h1>
            </div>
          </div>
          <div className="h-[300px] w-full md:w-1/3 flex justify-center items-end rounded-3xl mb-12 bg-[url('https://picsum.photos/400')] bg-cover bg-center">
            <div className="w-full h-[80px] bg-white rounded-3xl mx-2 mb-2">
              <h1 className="text-black text-right pt-2 pr-2">عقار دبي مول</h1>
              <h1 className="text-black text-left pl-2 text-sm">
                صفقة <span className="text-2xl text-red-600 p-2">$2.2M</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SearchProperty;