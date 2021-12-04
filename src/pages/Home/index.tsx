import React from "react";
import { Link } from "react-router-dom";

import useClickOutside from "../../hooks/useOutsideClick";
import MessageIcon from "../../assets/icons/MessageIcon";
import HorizontalDotsIcon from "../../assets/icons/HorizontalDotsIcon";
import KeyIcon from "../../assets/icons/KeyIcon";
import SunIcon from "../../assets/icons/SunIcon";
import BuildingIcon from "../../assets/icons/BuildingIcon";
import CakeIcon from "../../assets/icons/CakeIcon";
import ItemCard from "../../components/ItemCard";
import Modal from "../../components/Modal";
import Searchbar from "../../components/Searchbar";
import MoreToExplore from "../../components/MoreToExplore";

const items = [
  { name: "Hotels", Icon: BuildingIcon},
  { name: "Vacation Rentals", Icon: KeyIcon },
  { name: "Things to do", Icon: SunIcon },
  { name: "Restaurants", Icon: CakeIcon },
  { name: "Travel Forums", Icon: MessageIcon },
  { name: "More", Icon: HorizontalDotsIcon },
];

const Home = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const myRef = React.useRef<HTMLDivElement>(null);

  useClickOutside(myRef, () => {
    setModalOpen(false);
  });
  return (
    <>
      {modalOpen ? <Modal ref={myRef}>I am modaling</Modal> : ""}
      <div className="grid grid-cols-6 gap-2">
        {items.map(({ name, Icon }) => (
          <Link to="/" key="name">
            <ItemCard setModalOpen={setModalOpen}>
              {name} <Icon />
            </ItemCard>
          </Link>
        ))}
      </div>
      <div className="relative bg-search-bg w-full h-auto container mt-3">
          <img src="/images/search_bg.png" alt="graphics" className="mr-0 w-full h-full"/>
          <Searchbar className="absolute top-0 transform translate-x-44 translate-y-44" />
      </div>
      <MoreToExplore className="mt-4"/>
    </>
  );
};

export default Home;
