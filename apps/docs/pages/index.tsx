import { useState } from "react";

import { pokemonApi } from "redux-utils";
import { useNumFormatter } from "hooks-and-utils";

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
  const [num, setNum] = useState(1000);

  const { format } = useNumFormatter();

  const { data, isFetching, isError, isSuccess } = useGetPokemonByNameQuery(
    name,
    {
      skip: !name,
    }
  );

  return (
    <div>
      <h1>Docs</h1>

      <hr />

      <input
        value={num}
        onChange={(e) => setNum(+e.target.value)}
        type="number"
        placeholder="1000"
        className="m-1 inline-block rounded-sm border p-2 "
      />

      <p>
        Formatted value <strong>{format({ number: num })}</strong>
      </p>

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
