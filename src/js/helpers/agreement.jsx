import React from "react";

export default class Agreement extends React.Component {
  clickHandler = e => {
    e.currentTarget.classList.toggle("agreement__checkbox--checked");
  };

  render() {
    if (this.props.size === "half") {
      return (
        <div className="agreement agreement--half">
          <div className="agreement__checkbox" onClick={this.clickHandler}>
            <div />
          </div>
          <span className="agreement__text">
            {this.props.text}
            {this.props.link}
          </span>
        </div>
      );
    } else {
      return (
        <div className="agreement">
          <div className="agreement__checkbox" onClick={this.clickHandler}>
            <div />
          </div>
          <span className="agreement__text">
            {this.props.text}
            {this.props.link}
          </span>
        </div>
      );
    }
  }
}
