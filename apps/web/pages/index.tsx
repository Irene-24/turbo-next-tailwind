import { Button } from "ui";
import { pokemonApi } from "redux-utils";

const { useGetPokemonsQuery } = pokemonApi;

export default function Web() {
  const { data, isLoading, isError, isSuccess } = useGetPokemonsQuery();

  return (
    <div>
      <h1>Web</h1>
      <Button className="m-2 inline-block p-1 px-4">
        This button does nothing
      </Button>

      {isLoading ? <h3>Loading pokemons...</h3> : null}
      {isError ? <h3>Could not load pokemons</h3> : null}

      {isSuccess ? (
        <code className="m-2 block max-w-lg rounded-md bg-blue-800 p-2 font-mono text-sm text-white">
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </code>
      ) : null}
    </div>
  );
}
