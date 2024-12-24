import React, { useEffect, useState } from "react";
import List from "./components/List";

const App: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=151`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPokemonList(
          data.results.map((pokemon: { name: string }) => pokemon.name)
        );
      } catch (error) {
        console.log(error);
        setError("Failed to fetch pokemon data");
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <React.Fragment>
      <div>
        <h1>Pokémon List</h1>
        <List items={pokemonList} />
      </div>
    </React.Fragment>
  );
};

export default App;
