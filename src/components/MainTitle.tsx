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
    <div className={`flex w-full flex-col ${containerClassName}`}>
      <h2
        className={`py-4 text-2xl font-bold tracking-wide text-black ${titleClassName}`}
      >
        {title}
      </h2>
      <p className={`font-light text-black ${subtitleClassName}`}>{subtitle}</p>
    </div>
  );
};

export default MainTitle;
