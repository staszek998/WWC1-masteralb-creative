import React from "react";
import Form from "../helpers/form";
import Input from "../helpers/input";
import user from "../../images/inputs/user.png";
import lock from "../../images/inputs/lock.png";
import Agreement from "../helpers/agreement";
import ButtonBig from "../helpers/button-big";

const inputs = [
  <Input
    imgSrc={user}
    imgAlt="Human icon"
    inputType="text"
    inputPlaceholder="Username"
    key="0"
  />,
  <Input
    imgSrc={lock}
    imgAlt="Lock icon"
    inputType="password"
    inputPlaceholder="Password"
    key="1"
  />
];

export default class SignIn extends React.Component {
  render() {
    return (
      <Form
        inputs={inputs}
        title="Sign In Form"
        agreement={
          <div className="email__agreement-wrapper">
            <Agreement text="Remember me" size="half" />
            <ButtonBig text="Sign in" size="half" />
          </div>
        }
      />
    );
  }
}
