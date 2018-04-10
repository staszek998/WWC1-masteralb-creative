import React from "react";
import Form from "../helpers/form";
import Input from "../helpers/input";
import envelope from "../../images/inputs/envelope.png";
import phone from "../../images/inputs/phone.png";
import ButtonSmall from "../helpers/button-small";

const inputs = [
  <Input
    imgSrc={envelope}
    imgAlt="Envelope icon"
    inputType="email"
    inputPlaceholder="E-mail address"
    key="0"
  />,
  <Input
    imgSrc={phone}
    imgAlt="Phone icon"
    inputType="phone"
    inputPlaceholder="Mobile phone"
    key="1"
  />
];

export default class Recover extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Form
        inputs={inputs}
        title="Recover Form"
        buttons={
          <div className="buttons-wrapper">
            <ButtonSmall text="Send" />
            <ButtonSmall text="Done" />
          </div>
        }
      />
    );
  }
}
