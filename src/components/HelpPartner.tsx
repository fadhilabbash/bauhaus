import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Controller, Navigation } from "swiper/modules";
import { ArrowLeft02Icon, ArrowRight02Icon } from "hugeicons-react";
import "swiper/swiper-bundle.css";
const HelpPartner = () => {
  return (
    <section className="custom-container">
      <div className="my-12 flex items-center justify-center">
        <img className="w-96" src="./src/assets/images/group.png" alt="" />
      </div>
      <div className="relative mx-auto mb-[200px] flex h-[200px] w-[400px] items-center justify-between rounded-3xl border border-mediumBlue bg-gradient-to-tr from-black to-darkBlue py-20 md:h-[240px] md:w-[540px]">
        <div
          id="swiper-button-prev"
          className="absolute -right-32 hidden cursor-pointer rounded-full border border-primary px-4 py-1 text-center md:flex"
        >
          <ArrowRight02Icon size={16} />
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
          className="h-[150px] w-[360px] from-[#33333E29] to-[#9296EE00] md:h-[200px] md:w-[490px] md:rounded-3xl md:border md:border-mediumBlue md:bg-gradient-to-r"
        >
          <SwiperSlide>
            <div className="flex flex-col space-y-2 px-4 pt-4 text-white ">
              <div className="flex items-center justify-between">
                <div className="flex items-center rounded-full border bg-[#e2e5ee] p-1">
                  <img
                    src="https://picsum.photos/id/249/300/200"
                    alt="User"
                    className="size-10 rounded-full"
                  />
                  <div className="mx-2">
                    <p className="text-sm font-light text-black">أحمد وحيد</p>
                    <p className="text-sm font-light text-black opacity-70">
                      مستثمر عقاري
                    </p>
                  </div>
                </div>
                <div>
                  <p className="mb-4 text-sm opacity-70">last year</p>
                </div>
              </div>
              <p className="text-md font-light">
                الاستثمار صعب جدا بدون الامكانيات الإرشادية من اجل اتخاذ قرار
                صائب ولكن الشركة والحمدالله ساعدتني بوضع خطة استثمارية ممتازة.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col space-y-2 px-4 pt-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center rounded-full border bg-[#e2e5ee] p-1">
                  <img
                    src="https://picsum.photos/id/249/300/200"
                    alt="User"
                    className="size-10 rounded-full"
                  />
                  <div className="mx-2">
                    <p className="text-sm font-light text-black">أحمد وحيد</p>
                    <p className="text-sm font-light text-black opacity-70">
                      مستثمر عقاري
                    </p>
                  </div>
                </div>
                <div>
                  <p className="mb-4 text-sm opacity-70">last year</p>
                </div>
              </div>
              <p className="text-md font-light">
                الاستثمار صعب جدا بدون الامكانيات الإرشادية من اجل اتخاذ قرار
                صائب ولكن الشركة والحمدالله ساعدتني بوضع خطة استثمارية ممتازة.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p flex flex-col space-y-2 px-4 pt-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center rounded-full border bg-[#e2e5ee] p-1">
                  <img
                    src="https://picsum.photos/id/249/300/200"
                    alt="User"
                    className="size-10 rounded-full"
                  />
                  <div className="mx-2">
                    <p className="text-sm font-light text-black">أحمد وحيد</p>
                    <p className="text-sm font-light text-black opacity-70">
                      مستثمر عقاري
                    </p>
                  </div>
                </div>
                <div>
                  <p className="mb-4 text-sm opacity-70">last year</p>
                </div>
              </div>
              <p className="text-md font-light">
                الاستثمار صعب جدا بدون الامكانيات الإرشادية من اجل اتخاذ قرار
                صائب ولكن الشركة والحمدالله ساعدتني بوضع خطة استثمارية ممتازة.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>

        <div
          id="swiper-button-next"
          className="absolute -left-32 hidden cursor-pointer rounded-full border border-primary px-4 py-1 text-center md:flex"
        >
          <ArrowLeft02Icon size={16} />
        </div>
      </div>
    </section>
  );
};
export default HelpPartner;
