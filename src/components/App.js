import React from "react";
import Data from "../data/data.json";
import PokeList from "./PokeList";
import "../stylesheets/App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: Data,
    };
  }
  render() {
    return (
      <div className="page">
        <PokeList data={this.state.data} />
      </div>
    );
  }
}
export default App;
