import React from "react";

type CardProps = {
  className?: string;
  children: React.ReactNode;
};
const ItemCard: React.FC<CardProps> = ({ className = "", children }) => {
  return (
    <div
      className={`flex items-start justify-between border border-gray-900 rounded-md p-3 font-medium hover:bg-gray-900 hover:text-gray-50 min-h-card ${className}`}
    >
      {children}
    </div>
  );
};

export default ItemCard;
