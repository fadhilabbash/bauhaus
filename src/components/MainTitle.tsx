// const MainTitle = () => {
//   return (
//     <div className="flex flex-col  items-center space-x-6 space-x-reverse text-center w-full bg-white space-y-6 p-8">
//       <h2 className="tracking-wide mt-10 text-3xl font-bold py-4 text-black">
//         ابحث عن عقارك المثالي
//       </h2>
//       <p className="py-2 text-black w-1/2 font-light">
//         ابدأ رحلتك في العثور على العقار المناسب باستخدام أدوات البحث المتقدمة
//         لدينا. اكتشف مجموعة واسعة من الخيارات التي تلبي جميع الاحتياجات والأذواق
//       </p>
//     </div>
//   );
// };
import React from "react";

interface MainTitleProps {
  title: string;
  subtitle: string;
  containerClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const MainTitle: React.FC<MainTitleProps> = ({
  title,
  subtitle,
  containerClassName = "bg-white ",
  titleClassName = "",
  subtitleClassName = "",
}) => {
  return (
    <div
      className={`flex flex-col items-center text-center w-full  space-y-6 p-8 ${containerClassName}`}
    >
      <h2 className={`tracking-wide text-3xl font-bold py-4 text-black ${titleClassName}`}>
        {title}
      </h2>
      <p className={`py-2 text-black w-1/2 font-light ${subtitleClassName}`}>
        {subtitle}
      </p>
    </div>
  );
};

export default MainTitle;

