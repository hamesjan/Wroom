import React, { Component } from "react";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import classes from "./NewWroom.module.css";
import { Link } from "react-router-dom";
import updateObject, { checkValidity } from "../../shared/utility";

class NewWroom extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Wroom Name",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      country: {
        elementType: "textarea",
        elementConfig: {
          type: "text",
          placeholder: "Description",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your email",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      rate: {
        elementType: "rate",
        elementConfig: {
          type: "number",
          placeholder: "(seconds/person)",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      // deliveryMethod: {
      //   elementType: "select",
      //   elementConfig: {
      //     options: [
      //       {
      //         value: "fastest",
      //         displayValue: "Fastest",
      //       },
      //       {
      //         value: "cheapest",
      //         displayValue: "Cheapest",
      //       },
      //     ],
      //   },
      //   value: "fastest",
      //   validation: {},
      //   valid: true,
      // },
    },
    formIsValid: false,
  };

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedFormElement = updateObject(
      this.state.orderForm[inputIdentifier],
      {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          this.state.orderForm[inputIdentifier].validation
        ),
        touched: true,
      }
    );

    const updatedOrderForm = updateObject(this.state.orderForm, {
      [inputIdentifier]: updatedFormElement,
    });

    let formIsValid = true;
    for (let inputIdent in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdent].valid && formIsValid;
    }
    this.setState({
      orderForm: updatedOrderForm,
      formIsValid: formIsValid,
    });
  };

  orderHandler = (event) => {
    event.preventDefault();
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }
    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementsArray.map((formElement) => {
          return (
            <Input
              key={formElement.id}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              shouldValidate={formElement.config.validation}
              touched={formElement.config.touched}
              changed={(event) =>
                this.inputChangedHandler(event, formElement.id)
              }
              invalid={!formElement.config.valid}
            />
          );
        })}
        <Link to="/wroomcontrol">
          <Button btnType="Success" disabled={!this.state.formIsValid}>
            ENTER WROOM
          </Button>
        </Link>
      </form>
    );
    return (
      <div className={classes.NewWroom}>
        <h1>Start a New Wroom</h1>
        {form}
      </div>
    );
  }
}
export default NewWroom;
