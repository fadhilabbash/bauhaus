import { ArrowUpRight01Icon } from "hugeicons-react";

interface ImageSectionProps {
  bGImage: string;
  link: string;
  linkIconPosition: string;
  linkeBgColor?: string;
  linkBgPosition: string;
  circleBgColor: string;
  circleBgPosition: string;
}

const ImageSection: React.FC<ImageSectionProps> = ({
  bGImage,
  link,
  linkeBgColor = "bg-primary",
  linkBgPosition,
  linkIconPosition,
  circleBgColor,
  circleBgPosition,
}) => (
  <div
    className={`relative h-[450px] rounded-md bg-cover ${bGImage} bg-center`}
  >
    <div
      className={`absolute -bottom-8 ${circleBgPosition} h-24 w-24 rounded-full ${circleBgColor} `}
    ></div>
    <div
      className={`absolute -bottom-4 ${linkBgPosition} h-16 w-16 rounded-full ${linkeBgColor}`}
    ></div>
    <a href={link} className={`absolute bottom-1 ${linkIconPosition}`}>
      <ArrowUpRight01Icon className="text-white-600" />
    </a>
  </div>
);
export default ImageSection;
