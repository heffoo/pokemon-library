import React from 'react'

import "./onePoke.scss"
export const OnePoke = ({poke, pokemon}) => {
    console.log(pokemon)
    return (
        
    <div className="one-poke">{poke.name}</div>
    )
}