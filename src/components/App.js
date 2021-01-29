import "./App.scss";
import { Switch, Route, useHistory, useParams } from "react-router-dom";
import { PokoInfo } from "./pokoInfo/pokoInfo";
import { AllPokes } from "./allPokes/allPokes";
function App() {
  let { pokeUrl } = useParams();

  console.log(pokeUrl);

  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <>
      <div className="wrapper">
        <div className="div">
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
      </div>
    </>
  );
}

export default App;
