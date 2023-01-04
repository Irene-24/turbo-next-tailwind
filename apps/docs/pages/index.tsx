import { useState } from "react";

import { pokemonApi } from "redux-utils";

const { useGetPokemonByNameQuery } = pokemonApi;

const opts = [
  "bulbasaur",
  "ivysaur",
  "venusaur",
  "charmander",
  "charmeleon",
  "charizard",
  "squirtle",
  "wartortle",
  "blastoise",
  "caterpie",
];

export default function Docs() {
  const [name, setName] = useState("");
  const { data, isFetching, isError, isSuccess } = useGetPokemonByNameQuery(
    name,
    {
      skip: !name,
    }
  );

  return (
    <div>
      <h1>Docs</h1>
      <select
        className="my-2 capitalize"
        value={name}
        onChange={(e) => setName(e.target.value)}
      >
        <option className="capitalize" value="">
          Select pokemon...
        </option>
        {opts.map((name) => (
          <option className="capitalize" key={name} value={name}>
            {name}
          </option>
        ))}
      </select>

      <hr />

      {isFetching ? <h3>Loading pokemon data...</h3> : null}
      {isError ? <h3>Could not load pokemon data</h3> : null}

      {isSuccess && !isFetching ? (
        <code className="m-2 block max-w-lg rounded-md bg-green-800 p-2 font-mono text-sm text-white">
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </code>
      ) : null}
    </div>
  );
}
