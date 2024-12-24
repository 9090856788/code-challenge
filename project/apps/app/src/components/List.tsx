import React from "react";
import { useDispatch } from "react-redux";
import { removePokemon } from "./redux/pokemonSlice";
import "./List.css";

interface ListProps {
  items: string[];
}

const List: React.FC<ListProps> = ({ items }) => {
  const dispatch = useDispatch();

  const handleRemove = (name: string) => {
    dispatch(removePokemon(name));
  };

  return (
    <div className="pokemon-list">
      {items.map((item) => (
        <div key={item} className="pokemon-card">
          <p className="pokemon-name">{item}</p>
          <button className="pokemon-button" onClick={() => handleRemove(item)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default List;
