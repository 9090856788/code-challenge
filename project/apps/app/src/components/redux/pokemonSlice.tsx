import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PokemonState {
  list: string[];
}

const initialState: PokemonState = {
  list: [],
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemonList(state, action: PayloadAction<string[]>) {
      state.list = action.payload;
    },
    removePokemon(state, action: PayloadAction<string>) {
      state.list = state.list.filter((name) => name !== action.payload);
    },
  },
});

export const { setPokemonList, removePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
