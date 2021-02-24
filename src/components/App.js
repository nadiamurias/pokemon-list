import React from "react";
import Data from "../data/data.json";
import PokeList from "./PokeList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: Data,
    };
  }
  render() {
    console.log(this.state.data);
    return (
      <div>
        <PokeList data={this.state.data} />
      </div>
    );
  }
}
export default App;
