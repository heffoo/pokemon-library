import React from "react";
import { useState, useEffect } from "react";
import { replaceArticle } from "../../services/service";
import { PokoStats } from "./pokoStats/pokoStats";
import { useParams } from "react-router-dom";
import "../App.scss";

export const PokoInfo = () => {
  const [shiny, setShiny] = useState(false);
  const [pokeNumber, setPokeNumber] = useState("1"); //
  const [isLoad, setLoad] = useState(true);
  const [pokemon, setPokemon] = useState(null);
  
  let { pokeUrl } = useParams();
  

  function PokeInfo() {
    let url = "https://pokeapi.co/api/v2/pokemon/" + pokeUrl;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setPokemon(res);
      })
      .finally(() => setLoad(false));
  }

  useEffect(() => {
    PokeInfo();
  }, [pokeNumber]);

  const onSubmitPoke = (e) => {
    e.preventDefault();
    const form = document.forms.searchPokemon;
    if (form.elements.inputPoke.value <= 898) {
      setPokeNumber(form.elements.inputPoke.value);
    } else {
      alert("max 898");
    }

    form.elements.inputPoke.value = "";
  };

  console.log(pokeUrl);
  return (
    <>
      {!isLoad ? (
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
      ) : (
        "loading"
      )}
    </>
  );
};
