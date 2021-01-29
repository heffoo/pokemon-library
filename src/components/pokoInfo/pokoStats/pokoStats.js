import React from "react";
import { PokoTypes } from "./pokoTypes/pokoTypes";
import "./pokoStats.scss";
export const PokoStats = ({ pokemon }) => {
  console.log(pokemon.types);
  return (
    <section className="pokostats-container">
      <p>Stats:</p>
      <div className="base-stats">
        <p>weight: {pokemon.weight}</p>
  <p>height: {pokemon.height}</p>
      </div>
      <p>Types:</p>
      <div className="type-tags">
        {pokemon.types.map((type) => (
          <PokoTypes key={type.type.name} type={type} />
        ))}
      </div>
    </section>
  );
};
