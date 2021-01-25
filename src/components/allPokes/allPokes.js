import React, { useState, useEffect } from "react";
import { OnePoke } from "./onePoke/onePoke";
import { Link } from "react-router-dom";
import "./allPokes.scss";
export const AllPokes = ({ pokemon }) => {
  const [pokes, setPokes] = useState([]);
  const [isLoad, setLoad] = useState(true);
  const [pokeNumber, setPokeNumber] = useState("1"); //

  // console.log(pokes.results)
  function allPokes() {
    let url = "https://pokeapi.co/api/v2/pokemon?limit=800";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setPokes(res.results);
      })
      .finally(() => setLoad(false));
  }
  useEffect(() => {
    allPokes();
  }, []);

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

  return (
    <>
      {!isLoad ? (
        <div className="allpokes">
          <form className="searchForm" name="searchPokemon">
            <input type="text" className="inputPoke" name="inputPoke" />
          </form>
          {pokes.map((poke) => (
            <Link key={poke.name} className="tomeme-link" to={`${poke.name}`}>
              <OnePoke key={poke.name} poke={poke} url={poke.url} />
            </Link>
          ))}
          123
        </div>
      ) : (
        "loading"
      )}
    </>
  );
};
