import React from "react";
import Form from "../helpers/form";
import Input from "../helpers/input";
import envelope from "../../images/inputs/envelope.png";

const inputs = [
  <Input
    imgSrc={envelope}
    imgAlt="Envelope icon"
    inputType="email"
    inputPlaceholder="E-mail address"
    key="0"
  />
];

export default class Subscribe extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Form inputs={inputs} title="Subscribe Form" />;
  }
}
