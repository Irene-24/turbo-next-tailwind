import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Pokemon {}

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
    getPokemons: builder.query<Pokemon, void>({
      query: () => `pokemon?limit=10`,
    }),
  }),
});
