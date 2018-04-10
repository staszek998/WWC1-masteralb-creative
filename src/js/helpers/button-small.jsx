import React from "react";

export default class ButtonSmall extends React.Component {
  render() {
    if (this.props.text === "Done") {
      return (
        <button className="button-small grayed-out">{this.props.text}</button>
      );
    } else if (this.props.text === "No, thanks") {
      return <button className="button-small red">{this.props.text}</button>;
    } else {
      return <button className="button-small">{this.props.text}</button>;
    }
  }
}
