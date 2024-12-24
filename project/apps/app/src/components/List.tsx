import React from "react";

interface ListProps {
  items: string[];
}

const List: React.FC<ListProps> = ({ items }) => (
  <ul>
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

export default List;
