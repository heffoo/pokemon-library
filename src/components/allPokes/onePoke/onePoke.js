import React from "react";

import "./onePoke.scss";
import { PokoInfo } from "../../pokoInfo/pokoInfo";
export const OnePoke = ({ poke }) => {
  return (

      <div className="one-poke">{poke.name}</div>
  );
};
