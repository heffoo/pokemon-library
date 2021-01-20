import React from "react";
import "./pokoTypes.scss"
export const PokoTypes = ({type}) => {
    return (
    <p className={type.type.name}>{type.type.name}</p>
    )
}