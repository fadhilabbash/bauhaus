import { servicesData } from "../../lib/staticData";
import MainTitle from "../MainTitle";
import ImageSection from "./ImageSection";
import TextListSection from "./TextListSection";

const Services = () => {
 
  return (
    <section className="custom-container mb-32 mt-16">
      <MainTitle
        title="خدماتنا تساعدك بأتخاذ افضل خيارات الاستمثار العقارية"
        subtitle="نحن نقدم مجموعة شاملة من الخدمات العقارية لتلبية جميع احتياجاتكم"
        containerClassName="bg-none items-center text-center my-24"
        titleClassName="text-primary w-[65%]"
        subtitleClassName="text-white text-thin"
      />

      <div className="mt-16 grid grid-cols-2 gap-12">
        {/* Section1 */}
        <TextListSection
          title={servicesData.section1.title}
          items={servicesData.section1.items}
        />
        <ImageSection
          bGImage="bg-[url('./src/assets/images/service_01.jpeg')]"
          link="#"
          linkIconPosition="right-1"
          circleBgPosition="-right-8"
          circleBgColor="bg-[#1e2432]"
          linkBgPosition="-right-4"
          linkeBgColor="bg-primary"
        />
        {/* Section3 */}
        <ImageSection
          bGImage="bg-[url('./src/assets/images/service_02.jpeg')]"
          link="#"
          linkIconPosition="left-1"
          circleBgPosition="-left-8"
          circleBgColor="bg-[#1c212e]"
          linkBgPosition="-left-4"
          linkeBgColor="bg-primary"
        />
        <TextListSection
          title={servicesData.section2.title}
          items={servicesData.section2.items}
        />
         {/* Section3 */}
         <TextListSection
          title={servicesData.section3.title}
          items={servicesData.section3.items}
        />
        <ImageSection
          bGImage="bg-[url('./src/assets/images/service_03.jpeg')]"
          link="#"
          linkIconPosition="right-1"
          circleBgPosition="-right-8"
          circleBgColor="bg-[#1a1f2c]"
          linkBgPosition="-right-4"
          linkeBgColor="bg-primary"
        />
         {/* Section4 */}
         <ImageSection
          bGImage="bg-[url('./src/assets/images/service_04.jpeg')]"
          link="#"
          linkIconPosition="left-1"
          circleBgPosition="-left-8"
          circleBgColor="bg-[#181d28]"
          linkBgPosition="-left-4"
          linkeBgColor="bg-primary"
        />
        <TextListSection
          title={servicesData.section4.title}
          items={servicesData.section4.items}
        />
          {/* Section5 */}
          <TextListSection
          title={servicesData.section5.title}
          items={servicesData.section5.items}
        />
        <ImageSection
          bGImage="bg-[url('./src/assets/images/service_05.png')]"
          link="#"
          linkIconPosition="right-1"
          circleBgPosition="-right-8"
          circleBgColor="bg-[#161b25]"
          linkBgPosition="-right-4"
          linkeBgColor="bg-primary"
        />
      </div>
    </section>
  );
};
export default Services;
