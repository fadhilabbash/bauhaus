import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Feed from "./components/Feed";
import HeroWrapper from "./components/HeroWrapper";
import MainTitle from "./components/MainTitle";
import Footer from "./components/Footer";
import "remixicon/fonts/remixicon.css";
import Help from "./components/Help";
import BottomCarousel  from "./components/BottomCarousel ";
import WhyUs from "./components/WhyUs";

function App() {
  return (
    <>
      <HeroWrapper>
        <Navbar />
        <Hero />
      </HeroWrapper>
      <MainTitle
        title="ابحث عن عقارك المثالي"
        subtitle="ابدأ رحلتك في العثور على العقار المناسب باستخدام أدوات البحث المتقدمة لدينا. اكتشف مجموعة واسعة من الخيارات التي تلبي جميع الاحتياجات والأذواق"
        containerClassName="bg-white"
        titleClassName="text-black"
        subtitleClassName="text-black"
      />
      <Feed />
      <WhyUs/>
      <Help/>
      <BottomCarousel />
      <Footer/>
    </>
  );
}

export default App;
