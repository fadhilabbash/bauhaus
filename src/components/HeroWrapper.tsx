import React, { ReactNode } from "react";

interface HeroWrapperProps {
  bgSize?: string;
  bgPosition?: string;
  children?: ReactNode;
  className?: string;
}

const HeroWrapper: React.FC<HeroWrapperProps> = ({
  bgSize = "bg-cover",
  bgPosition = "bg-center",
  children,
  className = "",
}) => {
  return (
    <div
      className={`md:bg-[url('./src/assets/images/cover.png')] ${bgSize} ${bgPosition} h-screen ${className}`}
    >
      {children}
    </div>
  );
};

export default HeroWrapper;
