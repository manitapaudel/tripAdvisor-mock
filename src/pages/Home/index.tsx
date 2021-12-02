import { Link } from "react-router-dom";

import MessageIcon from "../../assets/icons/MessageIcon";
import ItemCard from "../../components/ItemCard";
import HorizontalDotsIcon from "../../assets/icons/HorizontalDotsIcon";
import KeyIcon from "../../assets/icons/KeyIcon";

const items = [
  { name: "Hotels", Icon: "icon" },
  { name: "Vacation Rentals", Icon: KeyIcon },
  { name: "Things to do", Icon: "icon2" },
  { name: "Restaurants", Icon: "icon2" },
  { name: "Travel Forums", Icon: MessageIcon },
  { name: "More", Icon: HorizontalDotsIcon },
];

const Home = () => {
  return (
    <div className="grid grid-cols-6 gap-2">
      {items.map(({ name, Icon }) => (
        <Link to="/" key="name">
          <ItemCard>
            {name} <Icon />
          </ItemCard>
        </Link>
      ))}
    </div>
  );
};

export default Home;
