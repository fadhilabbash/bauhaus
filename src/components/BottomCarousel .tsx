import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Controller, Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/swiper-bundle.css";

const BottomCarousel = () => {
  return (
    <div className="relative  w-[400px] h-[200px] md:w-[540px] md:h-[240px] mx-auto  flex items-center justify-between mb-[200px] py-20 bg-gradient-to-r from-[#10113299] to-[#777CF700] rounded-3xl border border-mediumBlue">
      <div
        id="swiper-button-prev"
        className="hidden md:flex absolute  -right-32 cursor-pointer border border-primary rounded-full text-center px-4 py-1"
      >
        <ArrowRight size={16} />
      </div>
      <Swiper
        modules={[Pagination, Controller, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: "#swiper-button-next",
          prevEl: "#swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        className="w-[360px] h-[150px] md:w-[490px] md:h-[200px] md:rounded-3xl md:border md:border-mediumBlue md:bg-gradient-to-r from-[#33333E29] to-[#9296EE00]"
      >
        <SwiperSlide>
          <div className=" text-white p-11 flex flex-col space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center  border rounded-full bg-[#e2e5ee] p-1">
                <img
                  src="https://picsum.photos/id/249/300/200"
                  alt="User"
                  className="size-10 rounded-full"
                />
                <div className="mx-2">
                  <p className="font-light text-sm text-black">أحمد وحيد</p>
                  <p className="font-light text-sm opacity-70 text-black">
                    مستثمر عقاري
                  </p>
                </div>
              </div>
              <div>
                <p className="text-sm opacity-70 mb-4">last year</p>
              </div>
            </div>
            <p className="text-md font-light">
              الاستثمار صعب جدا بدون الامكانيات الإرشادية من اجل اتخاذ قرار صائب
              ولكن الشركة والحمدالله ساعدتني بوضع خطة استثمارية ممتازة.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" text-white p-11 flex flex-col space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center  border rounded-full bg-[#e2e5ee] p-1">
                <img
                  src="https://picsum.photos/id/249/300/200"
                  alt="User"
                  className="size-10 rounded-full"
                />
                <div className="mx-2">
                  <p className="font-light text-sm text-black">أحمد وحيد</p>
                  <p className="font-light text-sm opacity-70 text-black">
                    مستثمر عقاري
                  </p>
                </div>
              </div>
              <div>
                <p className="text-sm opacity-70 mb-4">last year</p>
              </div>
            </div>
            <p className="text-md font-light">
              الاستثمار صعب جدا بدون الامكانيات الإرشادية من اجل اتخاذ قرار صائب
              ولكن الشركة والحمدالله ساعدتني بوضع خطة استثمارية ممتازة.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" text-white md:p-11 flex flex-col space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center  border rounded-full bg-[#e2e5ee] p-1">
                <img
                  src="https://picsum.photos/id/249/300/200"
                  alt="User"
                  className="size-10 rounded-full"
                />
                <div className="mdmx-2">
                  <p className="font-light text-sm text-black">أحمد وحيد</p>
                  <p className="font-light text-sm opacity-70 text-black">
                    مستثمر عقاري
                  </p>
                </div>
              </div>
              <div>
                <p className="text-sm opacity-70 mb-4">last year</p>
              </div>
            </div>
            <p className="text-md font-light">
              الاستثمار صعب جدا بدون الامكانيات الإرشادية من اجل اتخاذ قرار صائب
              ولكن الشركة والحمدالله ساعدتني بوضع خطة استثمارية ممتازة.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>

      <div
        id="swiper-button-next"
        className="hidden md:flex absolute -left-32 cursor-pointer border border-primary rounded-full text-center px-4 py-1"
      >
        <ArrowLeft size={16} />
      </div>
    </div>
  );
};

export default BottomCarousel;
