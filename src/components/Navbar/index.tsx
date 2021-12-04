import React from "react";
import { Link } from "react-router-dom";

import BellIcon from "../../assets/icons/BellIcon";
import HeartIcon from "../../assets/icons/HeartIcon";
import PencilIcon from "../../assets/icons/PencilIcon";
import PrimaryButton from "../Button/PrimaryButton";

type NavbarProps = {};

const navItems = [
  {
    name: "Review",
    href: "/reviews",
    Icon: PencilIcon,
  },
  { name: "Trips", href: "/trips", Icon: HeartIcon },
  { name: "Alerts", href: "/alerts", Icon: BellIcon },
];

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="flex items-center justify-between sticky top-0 bg-white mx-auto p-3 shadow-md">
      <Link to="/">
        <img
          src="/images/trip-advisor-logo.svg"
          alt="Trip advisor logo"
          width="200px"
          height="200px"
        />
      </Link>
      <div className="grid grid-cols-4 gap-6">
        {navItems.map(({ name, href, Icon }) => (
          <Link
            key={name}
            to={href}
            className="flex items-center font-bold font-mono text-lg p-1.5 rounded-full hover:bg-gray-200"
          >
            <Icon className="mr-1" />
            {name}
          </Link>
        ))}
        <PrimaryButton className="bg-gray-900 hover:bg-gray-800 text-gray-50 font-medium px-3 py-2 rounded-full">
          Sign In
        </PrimaryButton>
      </div>
    </div>
  );
};

export default Navbar;
