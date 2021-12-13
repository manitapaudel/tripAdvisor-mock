import React from "react";
import { Link, useLocation } from "react-router-dom";

import BellIcon from "../../assets/icons/BellIcon";
import HeartIcon from "../../assets/icons/HeartIcon";
import PencilIcon from "../../assets/icons/PencilIcon";

type NavbarProps = {
  showModal: boolean;
  setShowModal(a: boolean): void;
};

const navItems = [
  {
    name: "Review",
    href: "/reviews",
    Icon: PencilIcon,
  },
  { name: "Trips", href: "/trips", Icon: HeartIcon },
  { name: "Alerts", href: "/alerts", Icon: BellIcon },
];

const Navbar: React.FC<NavbarProps> = ({ showModal, setShowModal }) => {
  const [height, setHeight] = React.useState<number>(0);
  const location = useLocation();

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setHeight(window.scrollY);
    });
  }, []);
  return (
    <div
      className={`sticky top-0 bg-white mx-auto p-3 z-20 ${
        height > 0 ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/">
          <img
            src="/images/trip-advisor-logo.svg"
            alt="Trip advisor logo"
            width="200px"
            height="200px"
          />
        </Link>
        <div className="flex items-center justify-end gap-x-3">
          {navItems.map(({ name, href, Icon }) => (
            <Link
              key={name}
              to={href}
              className={`flex items-center justify-center font-bold font-mono text-lg p-2 px-2.5 -mb-5 border-b-4 border-white ${
                location.pathname === href
                  ? "border-gray-900 !rounded-none"
                  : "hover:border-gray-200"
              }`}
            >
              <Icon className="mr-1" />
              {name}
            </Link>
          ))}
          <button
            onClick={() => setShowModal(true)}
            className="bg-gray-900 hover:bg-gray-800 text-gray-50 font-medium px-3 py-2 rounded-full text-center -mb-5"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
