import React from "react";
import Form from "../helpers/form";
import Input from "../helpers/input";
import InputMessage from "../helpers/input-message";
import user from "../../images/inputs/user.png";
import envelope from "../../images/inputs/envelope.png";
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
    imgSrc={envelope}
    imgAlt="Envelope icon"
    inputType="email"
    inputPlaceholder="E-mail address"
    key="1"
  />,
  <InputMessage key="2" />
];

export default class Email extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Form
        inputs={inputs}
        title="Send E-mail"
        agreement={<Agreement text="Send a copy to my e-mail address" />}
        buttons={<ButtonBig text="Send e-mail" />}
      />
    );
  }
}
