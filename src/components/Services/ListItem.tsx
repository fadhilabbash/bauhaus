import { Uv01Icon } from "hugeicons-react";

const ListItem: React.FC<{ text: string }> = ({ text }) => (
    <li className="flex">
      <Uv01Icon className="ml-2 text-pink-600" size={16} />
      <span className="text-[12px] text-white">{text}</span>
    </li>
  );
  export default ListItem;