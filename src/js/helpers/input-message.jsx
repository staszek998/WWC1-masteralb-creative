import React from "react";

export default class InputMessage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <textarea placeholder="Your message" className="input-message" />
    );
  }
}
