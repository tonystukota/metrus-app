import React from "react";

import Card from "./Card";
import Title from "./Title";
import Transactions from "./Transactions";
import { ListingContainer } from "./styled";

const Listing = ({ data }) => {
  return (
    <ListingContainer>
      <Title text="My card" />
      <Card />
      <Transactions data={data} />
    </ListingContainer>
  );
};

export default Listing;
