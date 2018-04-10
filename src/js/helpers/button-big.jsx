import React from "react";

export default class ButtonBig extends React.Component {
  render() {
    if (this.props.size === "half") {
      return (
        <button className="button-big button-big--half">
          {this.props.text}
        </button>
      );
    } else {
      return <button className="button-big">{this.props.text}</button>;
    }
  }
}
