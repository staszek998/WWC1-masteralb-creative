import React from "react";
import Form from "../helpers/form";
import Input from "../helpers/input";
import envelope from "../../images/inputs/envelope.png";
import ButtonSmall from "../helpers/button-small";

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
  render() {
    return (
      <Form
        inputs={inputs}
        title="Subscribe Form"
        buttons={
          <div className="buttons-wrapper">
            <ButtonSmall text="Subscribe" />
            <ButtonSmall text="No, thanks" />
          </div>
        }
      />
    );
  }
}
