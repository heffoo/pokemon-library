import "./App.scss";
import { useState, useEffect } from "react";
import { Switch, Route, useHistory, useParams } from "react-router-dom";
import { PokoInfo } from "./pokoInfo/pokoInfo";
import { AllPokes } from "./allPokes/allPokes";
function App() {
  
  
  const [allPokes, setAllPokes] = useState(false);

  

  let { pokeUrl } = useParams();

  console.log(pokeUrl);

  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <>
      
        <div className="wrapper">
          <button className="side-button" onClick={handleClick}>
            show all
          </button>
          <div className="main-container">
            <Switch>
              <Route path="/:pokeUrl">
                <PokoInfo />
              </Route>
              <Route exact path="/">
                <AllPokes />

              </Route>
            </Switch>
          </div>
        </div>
   
  
    </>
  );
}

export default App;
