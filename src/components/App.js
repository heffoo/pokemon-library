import "./App.scss";
import { useState, useEffect } from "react";

import { PokoInfo } from "./pokoInfo/pokoInfo";
import { AllPokes } from "./allPokes/allPokes";
function App() {
  const [pokemon, setPokemon] = useState(null);
  const [isLoad, setLoad] = useState(true);
  const [pokeNumber, setPokeNumber] = useState("1"); //

  const [allPokes, setAllPokes] = useState(false);
  function PokeInfo() {
    let url = "https://pokeapi.co/api/v2/pokemon/" + pokeNumber;
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

  return (
    <>
      {!isLoad ? (
        <div className="wrapper">
          <button className="side-button" onClick={() => setAllPokes(!allPokes)}>
            show all
          </button>
          <div className="main-container">
            {!allPokes ? (
              <PokoInfo pokemon={pokemon} pokeNumber={pokeNumber} setPokeNumber={setPokeNumber} />
            ) : (
              <AllPokes pokemon={pokemon} />
            )}
          </div>
        </div>
      ) : (
        "loading"
      )}
    </>
  );
}

export default App;
