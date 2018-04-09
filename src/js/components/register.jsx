import React from "react";
import Form from "../helpers/form";
import Input from "../helpers/input";
import Select from "../helpers/select";
import user from "../../images/inputs/user.png";
import lock from "../../images/inputs/lock.png";
import envelope from "../../images/inputs/envelope.png";
import pin from "../../images/inputs/pin.png";

const countries = require("country-list")();

const options = countries.getNames().map(country => {
  return <option value={country}>{country}</option>;
});

options.unshift(
  <option value="Country" disabled selected>
    Country
  </option>
);

const inputs = [
  <Input
    imgSrc={user}
    imgAlt="Human icon"
    inputType="text"
    inputPlaceholder="Username"
  />,
  <Input
    imgSrc={lock}
    imgAlt="Lock icon"
    inputType="password"
    inputPlaceholder="Password"
  />,
  <Input
    imgSrc={lock}
    imgAlt="Lock icon"
    inputType="password"
    inputPlaceholder="Confirm password"
  />,
  <Input
    imgSrc={envelope}
    imgAlt="Envelope icon"
    inputType="email"
    inputPlaceholder="E-mail address"
  />,
  <Select imgSrc={pin} inputPlaceholder="Country" options={options} />
];

export default class Register extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Form inputs={inputs} />;
  }
}
