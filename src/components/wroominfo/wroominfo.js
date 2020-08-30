import React from "react";
import classes from "./wroominfo.module.css";

const wroomInfo = () => {
  return (
    <div className={classes.WroomInfoHolder}>
      <h1>Wroom Name</h1>
      <h2>680 people in line</h2>
      <a href="hello">https:wroom.app/[wroomID]</a>
      <h2>Wroom Description</h2>
      <h3>Current Rate: 22 seconds / person</h3>
    </div>
  );
};

export default wroomInfo;
