import React from "react";
import Form from "../helpers/form";
import Input from "../helpers/input";
import Select from "../helpers/select";
import user from "../../images/inputs/user.png";
import lock from "../../images/inputs/lock.png";
import envelope from "../../images/inputs/envelope.png";
import pin from "../../images/inputs/pin.png";

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
  />,
  <Input
    imgSrc={lock}
    imgAlt="Lock icon"
    inputType="password"
    inputPlaceholder="Confirm password"
    key="2"
  />,
  <Input
    imgSrc={envelope}
    imgAlt="Envelope icon"
    inputType="email"
    inputPlaceholder="E-mail address"
    key="3"
  />,
  <Select imgSrc={pin} key="4" />
];

export default class Register extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Form inputs={inputs} title='Register Form' />;
  }
}
