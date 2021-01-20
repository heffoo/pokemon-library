import React from "react";
import { useState } from "react";
import { replaceArticle } from "../../services/service";
import { PokoStats } from "./pokoStats/pokoStats";

import "../App.scss";


export const PokoInfo = ({ pokemon, pokeNumber, setPokeNumber }) => {
  const [shiny, setShiny] = useState(false);

  const onSubmitPoke = (e) => {
    e.preventDefault();
    const form = document.forms.searchPokemon; 
    if (form.elements.inputPoke.value <= 898) {
      setPokeNumber(form.elements.inputPoke.value); 
    } else {
      alert('max 898')
    }
    
   
    form.elements.inputPoke.value = "";
  };
  return (
    <div>
      <p className="pokeName">
        this is {replaceArticle(pokemon.name)}. it is a {pokeNumber} in pokedex!
      </p>
      <form className="searchForm" name="searchPokemon" onSubmit={onSubmitPoke}>
        <input type="text" className="inputPoke" name="inputPoke" />
      </form>
      <div className="images">
        <button onClick={() => setShiny(!shiny)}>{shiny ? "view default form" : "view shiny form"}</button>
        <div>
          <img src={!shiny ? `${pokemon.sprites.front_default}` : `${pokemon.sprites.front_shiny}`} alt="" />
          <img src={!shiny ? `${pokemon.sprites.back_default}` : `${pokemon.sprites.back_shiny}`} alt="" />
        </div>
      </div>
      <PokoStats pokemon={pokemon} />{" "}
    </div>
  );
};
