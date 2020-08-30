import React from "react";
import Aux from "../../hoc/Aux";
import classes from "./home.module.css";
import Button from "../../components/UI/Button/Button";
import PlaceHolder from "../../assets/images/placeholder_600x375.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Aux>
      <div className={classes.Home}>
        <div className={classes.LogoDiv}></div>
        <div className={classes.ItemsDiv}>
          <img src={PlaceHolder} alt="placeholder" />
          <div className={classes.RightDiv}>
            <div className={classes.InnerDiv}>
              <Link to="/newwroom">
                <Button btnType="Danger">+ Create Wroom</Button>
              </Link>
              <div className={classes.JoinDiv}>
                <input placeholder="Code or Link" />
                <Link to="/line">
                  <Button btnType="Success">Join Wroom</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Aux>
  );
};

export default Home;
