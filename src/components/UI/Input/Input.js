import React from "react";
import classes from "./Input.module.css";

const input = (props) => {
  let inputElement = null;
  const inputClasses = [classes.InputElement];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
  }
  if (props.elementType === "textarea") {
    inputClasses.push(classes.TextArea);
  }
  if (props.elementType === "rate") {
    inputClasses.push(classes.Rate);
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          onChange={props.changed}
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
    case "rate":
      inputElement = (
        <div
          style={{
            display: "flex",
            margin: "auto",
            justifyContent: "space-around",
          }}
        >
          <p>Estimated Rate of Progress</p>
          <input
            onChange={props.changed}
            className={inputClasses.join(" ")}
            {...props.elementConfig}
            value={props.value}
          />
        </div>
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          onChange={props.changed}
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={inputClasses.join(" ")}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          onChange={props.changed}
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
        />
      );
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
