import { useCounter, useFecth } from '../hooks';
import { IsLoading } from './IsLoading';
import { PokemonCard } from './PokemonCard';

export const Pokemon = () => {
  const { decrement, increment, counter } = useCounter(1);
  const { data, isLoading, hasError } = useFecth(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );
  return (
    <>
      <h1>informacion del pokemon</h1>
      <hr />
      {isLoading ? (
        <IsLoading />
      ) : (
        <PokemonCard
          {...data}
          sprites={[
            data.sprites.front_default,
            data.sprites.front_shiny,
            data.sprites.back_default,
            data.sprites.back_shiny,
          ]}
        />
      )}

      <button
        onClick={() => (counter > 1 ? decrement() : null)}
        className="btn btn-primary mt-2"
      >
        Anterior
      </button>
      <button onClick={() => increment()} className="btn btn-primary mt-2">
        siguiente
      </button>
    </>
  );
};
