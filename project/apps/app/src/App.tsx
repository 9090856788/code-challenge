/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import List from "./components/List";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./components/redux/store";
import { setPokemonList } from "./components/redux/pokemonSlice";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state: RootState) => state.pokemon.list);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=151"
        );
        const data = await response.json();
        dispatch(
          setPokemonList(
            data.results.map((pokemon: { name: string }) => pokemon.name)
          )
        );
      } catch (error) {
        console.error("Failed to fetch Pokémon:", error);
      }
    };

    fetchPokemon();
  }, [dispatch]);

  return (
    <>
      <div>
        <h1>Pokémon List</h1>
        <List items={pokemonList} />
      </div>
    </>
  );
};

export default App;
