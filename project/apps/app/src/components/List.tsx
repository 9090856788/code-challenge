import React from "react";
import "./List.css";

interface ListProps {
  items: string[];
}

const List: React.FC<ListProps> = ({ items }) => (
  <div className="grid-container">
    {items.map((item) => (
      <div key={item} className="grid-item">
        {item}
      </div>
    ))}
  </div>
);

export default List;
