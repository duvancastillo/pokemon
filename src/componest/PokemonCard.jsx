export const PokemonCard = ({ id, name, sprites = [] }) => {
  return (
    <section style={{ height: 200 }}>
      <h2 className="text-capitalize">
        #{id}-{name}
      </h2>
      <div>
        {sprites.map((sprites) => (
          <img key={sprites} src={sprites} alt={sprites} />
        ))}
      </div>
    </section>
  );
};
