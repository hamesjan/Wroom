import React, { Component } from "react";
import classes from "./WroomControl.module.css";
import WroomInfo from "../../components/wroominfo/wroominfo";
import Inline from "../../components/inline/inline";

class WroomControl extends Component {
  render() {
    return (
      <div className={classes.Background}>
        <div className={classes.LeftSide}>
          <WroomInfo />
        </div>
        <div className={classes.RightSide}>
          <Inline />
          <Inline />
          <Inline />
          <Inline />
          <Inline />
        </div>
      </div>
    );
  }
}

export default WroomControl;
