import ListItem from "./ListItem";

interface TextListSectionProps {
  title: string;
  items: string[];
}

const TextListSection: React.FC<TextListSectionProps> = ({ title, items }) => (
  <div className="flex flex-col justify-center space-y-12">
    <h1 className="mb-4 text-xl font-bold">{title}</h1>
    <ul className="space-y-4">
      {items.map((item, index) => (
        <ListItem key={index} text={item} />
      ))}
    </ul>
  </div>
);
export default TextListSection;