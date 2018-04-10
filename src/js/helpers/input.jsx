import React from "react";

export default class Input extends React.Component {
  render() {
    return (
      <div className="input">
        <div
          className="input__image"
          style={{ backgroundImage: `url(${this.props.imgSrc})` }}
        />
        <input
          type={this.props.inputType}
          placeholder={this.props.inputPlaceholder}
          className="input__input"
        />
      </div>
    );
  }
}
