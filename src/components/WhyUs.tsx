import MainTitle from "./MainTitle";

const WhyUs = () => {
  return (
    <div>
      <section className="container mx-auto mt-8 max-w-[60%]">
        <MainTitle
          title="لماذا تختار BauHaus؟"
          subtitle="نحن نتميز بخبرتنا الواسعة وفريقنا المحترف، مما يجعلنا الخيار الأول للعملاء الباحثين عن الجودة والموثوقية."
          containerClassName="bg-none"
          titleClassName="text-primary"
          subtitleClassName="text-white text-thin"
        />
        <div className="flex items-center justify-center gap-4">
          <div
            className="w-1/3 h-[300px] bg-gradient-to-r from-darkBlue to-mediumBlue rounded-3xl"
            style={{
              clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0 100%, 0 20%)",
            }}
          >
            <div className="flex flex-col items-center justify-center text-center mt-12">
              <img
                src="./src/assets/images/feature-icon-01.png"
                alt=""
                width="70px"
              />
              <h2 className="text-white text-3xl font-bold pt-3">
                Get Lost in
              </h2>
              <p className="text-white text-light font-thin pt-4 text-center">
                to allow a flex item to grow and shrink as needed, ignoring its
                initial size
              </p>
            </div>
          </div>

          <div
            className="w-1/3 h-[300px] bg-gradient-to-r from-darkBlue to-mediumBlue rounded-3xl"
            style={{
              clipPath: "polygon(0% 0%, 80% 0%, 100% 20%, 100% 100%, 0% 100%)",
            }}
          >
            <div className="flex flex-col items-center justify-center text-center mt-12">
              <img
                src="./src/assets/images/feature-icon-02.png"
                alt=""
                width="70px"
              />
              <h2 className="text-white text-3xl font-bold pt-3">
                Get Lost in
              </h2>
              <p className="text-white text-light font-thin pt-4 text-center">
                to allow a flex item to grow and shrink as needed, ignoring its
                initial size
              </p>
            </div>
          </div>

          <div
            className="w-1/3 h-[300px] bg-gradient-to-r from-darkBlue to-mediumBlue rounded-3xl"
            style={{
              clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0 100%, 0 20%)",
            }}
          >
            <div className="flex flex-col items-center justify-center text-center mt-12">
              <img
                src="./src/assets/images/feature-icon-03.png"
                alt=""
                width="70px"
              />
              <h2 className="text-white text-3xl font-bold pt-3">
                Get Lost in
              </h2>
              <p className="text-white text-light font-thin pt-4 text-center">
                to allow a flex item to grow and shrink as needed, ignoring its
                initial size
              </p>
            </div>
          </div>
          <div
            className="w-1/3 h-[300px] bg-gradient-to-r from-darkBlue to-mediumBlue rounded-3xl"
            style={{
              clipPath: "polygon(0% 0%, 80% 0%, 100% 20%, 100% 100%, 0% 100%)",
            }}
          >
            <div className="flex flex-col items-center justify-center text-center mt-12">
              <img
                src="./src/assets/images/feature-icon-04.png"
                alt=""
                width="70px"
              />
              <h2 className="text-white text-3xl font-bold pt-3">
                Get Lost in
              </h2>
              <p className="text-white text-light font-thin pt-4 text-center ">
                to allow a flex item to grow and shrink as needed, ignoring its
                initial size
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default WhyUs;
