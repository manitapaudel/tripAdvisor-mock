import React from "react";
import { Link } from "react-router-dom";

import useClickOutside from "../../hooks/useOutsideClick";
import MessageIcon from "../../assets/icons/MessageIcon";
import HorizontalDotsIcon from "../../assets/icons/HorizontalDotsIcon";
import KeyIcon from "../../assets/icons/KeyIcon";
import SunIcon from "../../assets/icons/SunIcon";
import ItemCard from "../../components/ItemCard";
import Modal from "../../components/Modal";
import BuildingIcon from "../../assets/icons/BuildingIcon";
import CakeIcon from "../../assets/icons/CakeIcon";

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
    </>
  );
};

export default Home;
