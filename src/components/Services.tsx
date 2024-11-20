import MainTitle from "./MainTitle";
import { Uv01Icon,ArrowUpRight01Icon } from "hugeicons-react";
const Services = () => {
  return (
    <section className="custom-container mt-16 mb-32">
      <MainTitle
        title=" خدماتنا تساعدك بأتخاذ افضل خيارات الاستمثار العقارية"
        subtitle="نحن نقدم مجموعة شاملة من الخدمات العقارية لتلبية جميع احتياجاتكم"
        containerClassName="bg-none items-center text-center my-24"
        titleClassName="text-primary w-[65%]"
        subtitleClassName="text-white text-thin"
      />
      {/* Part01 */}
      <div className="flex flex-col md:flex-row gap-16">
        <div className="w-1/2 flex flex-col justify-center space-y-12">
          <h1 className="font-bold  text-xl mb-4">
            وساطة عقارية أمنة بين المالك والمشتري
          </h1>

          <ul className="space-y-4">
            <li className="flex">
              <span className="">
                <Uv01Icon className="ml-2 text-pink-600" size={16} />
              </span>
              <span className="text-white text-[12px] ">
                نساعدكم في بيع عقاراتكم بأفضل الأسعار وشراء العقارات المناسبة
                لاحتياجاتكم.
              </span>
            </li>
            <li className="flex">
              <span className="">
                <Uv01Icon className="ml-2 text-pink-600" size={16} />
              </span>
              <span className="text-white text-[12px] ">
                تحليل شامل للسوق لتحديد القيمة الحالية لعقارك.
              </span>
            </li>
            <li className="flex">
              <span className="">
                <Uv01Icon className="ml-2 text-pink-600" size={16} />
              </span>
              <span className="text-white text-[12px] ">
                استخدام أحدث استراتيجيات التسويق لجذب المشترين المحتملين.
              </span>
            </li>
            <li className="flex">
              <span className="">
                <Uv01Icon className="ml-2 text-pink-600" size={16} />
              </span>
              <span className="text-white text-[12px] ">
                دعم كامل في إجراءات النقل والتسجيل وتنفيذ العقود.
              </span>
            </li>
          </ul>
        </div>
        <div className="relative w-1/2 h-[450px] bg-[url('./src/assets/images/service_01.jpeg')] bg-cover bg-center rounded-md">
          <div className="absolute -bottom-8 -right-8 h-24 w-24 bg-[#1e2432] rounded-full"></div>
          <div className="absolute -bottom-4 -right-4 h-16 w-16 bg-primary rounded-full">
          </div>
          <a href="#" className="absolute bottom-1 right-1">
              <ArrowUpRight01Icon className=" text-white-600"  />
            </a>
        </div>
      </div>

 {/* Part02 */}
      <div className="flex flex-col md:flex-row gap-16 mt-16">
      
        <div className="relative w-1/2 h-[450px] bg-[url('./src/assets/images/service_02.jpeg')] bg-cover bg-center rounded-md">
          <div className="absolute -bottom-8 -left-8 h-24 w-24 bg-[#1c212e] rounded-full"></div>
          <div className="absolute -bottom-4 -left-4 h-16 w-16 bg-primary rounded-full">
          </div>
          <a href="#" className="absolute bottom-1 left-1">
              <ArrowUpRight01Icon className=" text-white-600"  />
            </a>
        </div>
        <div className="w-1/2 flex flex-col justify-center space-y-12">
          <h1 className="font-bold  text-xl mb-4">
          أستشارة عقارية تبني لك خطة استثمارية مربحة
          </h1>

          <ul className="space-y-4">
            <li className="flex">
              <span className="">
                <Uv01Icon className="ml-2 text-pink-600" size={16} />
              </span>
              <span className="text-white text-[12px] ">
              خدمات تقييم متخصصة لتحديد القيمة العادلة للعقارات بموضوعية واحترافية.
              </span>
            </li>
            <li className="flex">
              <span className="">
                <Uv01Icon className="ml-2 text-pink-600" size={16} />
              </span>
              <span className="text-white text-[12px] ">
              نصائح والتوجيهات المبنية على البيانات والتحليل للمساعدة في اتخاذ قرارات استثمارية ذكية.
              </span>
            </li>
            <li className="flex">
              <span className="">
                <Uv01Icon className="ml-2 text-pink-600" size={16} />
              </span>
              <span className="text-white text-[12px] ">
              تحليل دقيق للفرص الاستثمارية المتاحة.
              </span>
            </li>
            <li className="flex">
              <span className="">
                <Uv01Icon className="ml-2 text-pink-600" size={16} />
              </span>
              <span className="text-white text-[12px] ">
              توجيهات مبنية على البيانات والتحليل للاستفادة القصوى من فرص السوق.
              </span>
            </li>
          </ul>
        </div>
      </div>

 {/* Part03 */}
      <div className="flex flex-col md:flex-row gap-16 mt-16">
        <div className="w-1/2 flex flex-col justify-center space-y-12">
          <h1 className="font-bold  text-xl mb-4">
            وساطة عقارية أمنة بين المالك والمشتري
          </h1>

          <ul className="space-y-4">
            <li className="flex">
              <span className="">
                <Uv01Icon className="ml-2 text-pink-600" size={16} />
              </span>
              <span className="text-white text-[12px] ">
                نساعدكم في بيع عقاراتكم بأفضل الأسعار وشراء العقارات المناسبة
                لاحتياجاتكم.
              </span>
            </li>
            <li className="flex">
              <span className="">
                <Uv01Icon className="ml-2 text-pink-600" size={16} />
              </span>
              <span className="text-white text-[12px] ">
                تحليل شامل للسوق لتحديد القيمة الحالية لعقارك.
              </span>
            </li>
            <li className="flex">
              <span className="">
                <Uv01Icon className="ml-2 text-pink-600" size={16} />
              </span>
              <span className="text-white text-[12px] ">
                استخدام أحدث استراتيجيات التسويق لجذب المشترين المحتملين.
              </span>
            </li>
            <li className="flex">
              <span className="">
                <Uv01Icon className="ml-2 text-pink-600" size={16} />
              </span>
              <span className="text-white text-[12px] ">
                دعم كامل في إجراءات النقل والتسجيل وتنفيذ العقود.
              </span>
            </li>
          </ul>
        </div>
        <div className="relative w-1/2 h-[450px] bg-[url('./src/assets/images/service_03.jpeg')] bg-cover bg-center rounded-md">
          <div className="absolute -bottom-8 -right-8 h-24 w-24 bg-[#191e2a] rounded-full"></div>
          <div className="absolute -bottom-4 -right-4 h-16 w-16 bg-primary rounded-full">
          </div>
          <a href="#" className="absolute bottom-1 right-1">
              <ArrowUpRight01Icon className=" text-white-600"  />
            </a>
        </div>
      </div>

 {/* Part04 */}
      <div className="flex flex-col md:flex-row gap-16 mt-16">
      
      <div className="relative w-1/2 h-[450px] bg-[url('./src/assets/images/service_04.jpeg')] bg-cover bg-center rounded-md">
        <div className="absolute -bottom-8 -left-8 h-24 w-24 bg-[#181c28] rounded-full"></div>
        <div className="absolute -bottom-4 -left-4 h-16 w-16 bg-primary rounded-full">
        </div>
        <a href="#" className="absolute bottom-1 left-1">
            <ArrowUpRight01Icon className=" text-white-600"  />
          </a>
      </div>
      <div className="w-1/2 flex flex-col justify-center space-y-12">
        <h1 className="font-bold  text-xl mb-4">
        أستشارة عقارية تبني لك خطة استثمارية مربحة
        </h1>

        <ul className="space-y-4">
          <li className="flex">
            <span className="">
              <Uv01Icon className="ml-2 text-pink-600" size={16} />
            </span>
            <span className="text-white text-[12px] ">
            خدمات تقييم متخصصة لتحديد القيمة العادلة للعقارات بموضوعية واحترافية.
            </span>
          </li>
          <li className="flex">
            <span className="">
              <Uv01Icon className="ml-2 text-pink-600" size={16} />
            </span>
            <span className="text-white text-[12px] ">
            نصائح والتوجيهات المبنية على البيانات والتحليل للمساعدة في اتخاذ قرارات استثمارية ذكية.
            </span>
          </li>
          <li className="flex">
            <span className="">
              <Uv01Icon className="ml-2 text-pink-600" size={16} />
            </span>
            <span className="text-white text-[12px] ">
            تحليل دقيق للفرص الاستثمارية المتاحة.
            </span>
          </li>
          <li className="flex">
            <span className="">
              <Uv01Icon className="ml-2 text-pink-600" size={16} />
            </span>
            <span className="text-white text-[12px] ">
            توجيهات مبنية على البيانات والتحليل للاستفادة القصوى من فرص السوق.
            </span>
          </li>
        </ul>
      </div>
    </div>
 {/* Part05 */}
  <div className="flex flex-col md:flex-row gap-16 mt-16">
        <div className="w-1/2 flex flex-col justify-center space-y-12">
          <h1 className="font-bold  text-xl mb-4">
            وساطة عقارية أمنة بين المالك والمشتري
          </h1>

          <ul className="space-y-4">
            <li className="flex">
              <span className="">
                <Uv01Icon className="ml-2 text-pink-600" size={16} />
              </span>
              <span className="text-white text-[12px] ">
                نساعدكم في بيع عقاراتكم بأفضل الأسعار وشراء العقارات المناسبة
                لاحتياجاتكم.
              </span>
            </li>
            <li className="flex">
              <span className="">
                <Uv01Icon className="ml-2 text-pink-600" size={16} />
              </span>
              <span className="text-white text-[12px] ">
                تحليل شامل للسوق لتحديد القيمة الحالية لعقارك.
              </span>
            </li>
            <li className="flex">
              <span className="">
                <Uv01Icon className="ml-2 text-pink-600" size={16} />
              </span>
              <span className="text-white text-[12px] ">
                استخدام أحدث استراتيجيات التسويق لجذب المشترين المحتملين.
              </span>
            </li>
            <li className="flex">
              <span className="">
                <Uv01Icon className="ml-2 text-pink-600" size={16} />
              </span>
              <span className="text-white text-[12px] ">
                دعم كامل في إجراءات النقل والتسجيل وتنفيذ العقود.
              </span>
            </li>
          </ul>
        </div>
        <div className="relative w-1/2 h-[450px] bg-[url('./src/assets/images/service_05.png')] bg-cover bg-center rounded-md">
          <div className="absolute -bottom-8 -right-8 h-24 w-24 bg-[#151924] rounded-full"></div>
          <div className="absolute -bottom-4 -right-4 h-16 w-16 bg-primary rounded-full">
          </div>
          <a href="#" className="absolute bottom-1 right-1">
              <ArrowUpRight01Icon className=" text-white-600"  />
            </a>
        </div>
      </div>
    </section>
  );
};
export default Services;
