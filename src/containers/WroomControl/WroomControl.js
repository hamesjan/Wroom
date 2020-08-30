import React, { Component } from "react";
import classes from "./WroomControl.module.css";

class WroomControl extends Component {
  render() {
    return (
      <div className={classes.Background}>
        <div className={classes.LeftSide}></div>
        <div className={classes.RightSide}></div>
      </div>
    );
  }
}

export default WroomControl;
