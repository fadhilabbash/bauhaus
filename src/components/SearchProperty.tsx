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
        <div className="mx-auto flex w-fit items-center justify-center rounded-full border bg-secondary px-2 py-1">
          <button className="rounded-full bg-white px-8 py-2 text-black">
            تجاري
          </button>
          <button className="rounded-full px-8 py-2 text-black">سكني</button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="mb-12 flex h-[300px] w-full items-end justify-center rounded-3xl bg-[url('https://picsum.photos/400')] bg-cover bg-center"
            >
              <div className="mx-2 mb-2 h-[80px] w-full rounded-3xl bg-white">
                <h1 className="pr-2 pt-2 text-right text-black">
                  عقار دبي مول
                </h1>
                <h1 className="pl-2 text-left text-sm text-black">
                  صفقة <span className="p-2 text-2xl text-red-600">$2.2M</span>
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SearchProperty;
