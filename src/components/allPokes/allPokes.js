import React, {useState, useEffect} from 'react' 
import { OnePoke } from './onePoke/onePoke';

import './allPokes.scss'
export const AllPokes = ({pokemon}) => {
    const [pokes, setPokes] = useState([]);
    // console.log(pokes.results)
    function allPokes() {
        let url = "https://pokeapi.co/api/v2/pokemon?limit=800";
        fetch(url)
          .then((response) => {
             
            return response.json();
          })
          .then((res) => { 
            setPokes(res.results)
          })
        //   .finally(() => setLoad(false));
      }
      useEffect(() => {
        allPokes()    
      }, [])
      
    return (
    <div className="allpokes">
        {pokes.map((poke)=> <OnePoke key={poke.name} pokemon={pokemon} poke={poke}/>)}
        123
        </div>
    )
}