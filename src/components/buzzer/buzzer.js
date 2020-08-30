import React from "react";
import classes from "./buzzer.module.css";
import Aux from "../../hoc/Aux";

const buzzer = (props) => (
  <Aux>
    <div>
      <div className={classes.Buzzer}>
        <div className={classes.MetalDots}>
          <div className={classes.TopDots}>
            <div className={classes.MetalDot}></div>
            <div className={classes.MetalDot}></div>
          </div>
          <div className={classes.RedBorder}>
            <div className={classes.InnerBox}>
              <h1>654</h1>
              <p>Estimated Wait: 20 minutes</p>
              <p>10 people in front of you</p>
              <div>
                <button>Waiting....</button>
              </div>
            </div>
          </div>
          <div className={classes.BottomDots}>
            <div className={classes.MetalDot}></div>
            <div className={classes.MetalDot}></div>
          </div>
        </div>
      </div>
    </div>
  </Aux>
);

export default buzzer;
