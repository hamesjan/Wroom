import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Buzzer from "../../components/buzzer/buzzer";

class Line extends Component {
  render() {
    return (
      <Aux>
        <Buzzer />
      </Aux>
    );
  }
}

export default Line;
