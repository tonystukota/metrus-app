import React, { Component } from "react";
import Listing from "./components/Listing";

const { data } = require("./transactions_card.json");

class App extends Component {
  render() {
    return <Listing data={data} />;
  }
}

export default App;
