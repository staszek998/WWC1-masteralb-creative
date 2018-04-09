import React from "react";

export default class Select extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="input">
        <div
          className="input__image"
          style={{ backgroundImage: `url(${this.props.imgSrc})` }}
        />
        <select name={this.props.name} className="input__select">
          {this.props.options}
        </select>
      </div>
    );
  }
}
