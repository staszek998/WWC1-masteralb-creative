import React from "react";

export default class ButtonBig extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <button className="button-big">{this.props.text}</button>;
  }
}
