import React from "react";

type CardProps = {
  className?: string;
  children: React.ReactNode;
};
const ItemCard: React.FC<CardProps> = ({ className = "", children }) => {
  return (
    <div className={`grid grid-cols-2 gap-4 ${className}`}>{children}</div>
  );
};

export default ItemCard;
