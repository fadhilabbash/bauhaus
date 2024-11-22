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
import "swiper/swiper-bundle.css";
const DiscoverChances = () => {
  return (
    <>
      <section className="custom-container">
        <div className="hidden h-30 my-12 md:flex items-center justify-around rounded-xl bg-[#FFFFFF05] p-2">
          <a
            href="#home"
            className="flex items-center justify-center rounded-2xl border border-primary p-3 text-sm text-white"
          >
            <CoinsSwapIcon className="ml-2" color="#37afb0" />
            عقارات ذات عائد مرتفع
          </a>
          <a
            href="#home"
            className="flex items-center justify-center text-sm text-white"
          >
            <MoneyBag02Icon className="ml-2" color="#37afb0" />
            مشاريع استثمارية مميزة
          </a>
          <a
            href="#home"
            className="flex items-center justify-center text-sm text-white"
          >
            <Building05Icon className="ml-2" color="#37afb0" />
            عقارات قيد التطوير
          </a>
        </div>
        <div className="flex flex-col gap-3 md:flex-row">
          <div className="flex flex-col justify-end space-y-8 md:w-1/2">
            <MainTitle
              title="اكتشف فرص حصرية للأستثمار العقاري"
              subtitle="نحن نتميز بخبرتنا الواسعة وفريقنا المحترف، مما يجعلنا الخيار الأول للعملاء الباحثين عن الجودة والموثوقية."
              containerClassName=""
              titleClassName="text-primary w-[75%]"
              subtitleClassName="text-white text-thin"
            />
            <div className="space-y-10">
              <div className="flex flex-row gap-4">
                <div
                  id="swiper-button-prev"
                  className="flex w-1/2 cursor-pointer flex-row justify-end"
                >
                  <ArrowRight02Icon
                    className="bg-white p-1"
                    size={24}
                    color="#000"
                  />
                </div>
                <div
                  id="swiper-button-next"
                  className="flex w-1/2 cursor-pointer flex-row items-center justify-start"
                >
                  <ArrowLeft02Icon
                    className="bg-white p-1"
                    size={24}
                    color="#000"
                  />
                  <hr className="border-1 w-full border-gray-400" />
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

          <div className="rounded-md md:w-1/2">
            <img
              src="./src/assets/images/building.jpg"
              alt=""
              className="rounded-md"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default DiscoverChances;
