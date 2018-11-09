import React from "react";
import card from "../assets/card.svg";

import { CardContainer } from "./styled";

const Card = () => (
  <CardContainer>
    <img src={card} alt="card" />
  </CardContainer>
);

export default Card;
