import { Swiper, SwiperSlide } from "swiper/react";
import MainTitle from "./MainTitle";
import {
  CoinsSwapIcon,
  Building05Icon,
  MoneyBag02Icon,
  ArrowLeft02Icon,
  ArrowRight02Icon,
} from "hugeicons-react";
import { Navigation } from "swiper/modules";

const DiscoverChances = () => {
  return (
    <>
      <section className="custom-container">
        <div className="bg-[#FFFFFF05] h-30 rounded-xl p-2 my-12 flex items-center justify-around">
          <a
            href="#home"
            className="text-white text-sm flex items-center justify-center p-3 border border-primary rounded-2xl"
          >
            <CoinsSwapIcon className="ml-2" color="#37afb0" />
            عقارات ذات عائد مرتفع
          </a>
          <a
            href="#home"
            className="text-white  text-sm flex items-center justify-center"
          >
            <MoneyBag02Icon className="ml-2" color="#37afb0" />
            مشاريع استثمارية مميزة
          </a>
          <a
            href="#home"
            className="text-white text-sm flex items-center justify-center"
          >
            <Building05Icon className="ml-2" color="#37afb0" />
            عقارات قيد التطوير
          </a>
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="md:w-1/2 flex flex-col justify-end space-y-8">
            <MainTitle
              title="اكتشف فرص حصرية للأستثمار العقاري"
              subtitle="نحن نتميز بخبرتنا الواسعة وفريقنا المحترف، مما يجعلنا الخيار الأول للعملاء الباحثين عن الجودة والموثوقية."
              containerClassName=""
              titleClassName="text-primary w-[75%]"
              subtitleClassName="text-white text-thin"
            />
            <div className="space-y-10">
              <div className="flex flex-row gap-4 ">
                <div
                  id="swiper-button-prev"
                  className="w-1/2 cursor-pointer flex flex-row justify-end"
                >
                  <ArrowRight02Icon
                    className="bg-white p-1"
                    size={24}
                    color="#000"
                  />
                </div>
                <div
                  id="swiper-button-next"
                  className="w-1/2 cursor-pointer flex flex-row items-center justify-start"
                >
                  <ArrowLeft02Icon
                    className="bg-white p-1"
                    size={24}
                    color="#000"
                  />
                  <hr className="w-full border-gray-400 border-1" />
                </div>
              </div>

              <Swiper
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={2}
                navigation={{
                  nextEl: "#swiper-button-next",
                  prevEl: "#swiper-button-prev",
                }}
                className=""
              >
                <SwiperSlide className="">
                  <img
                    src="./src/assets/images/discover1.jpg"
                    alt=""
                    className="rounded-md"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <img
                    src="./src/assets/images/discover2.jpg"
                    alt=""
                    className="rounded-md"
                  />
                </SwiperSlide>
                <SwiperSlide className="">
                  <img
                    src="./src/assets/images/discover1.jpg"
                    alt=""
                    className="rounded-md"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <img
                    src="./src/assets/images/discover2.jpg"
                    alt=""
                    className="rounded-md"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className="md:w-1/2 rounded-md">
            <img
              src="./src/assets/images/building.jpg"
              alt=""
              className=" rounded-md"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default DiscoverChances;
