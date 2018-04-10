import React from "react";

export default class from extends React.Component {
  render() {
    return (
      <div className="form">
        <h2 className="form__title">{this.props.title}</h2>
        <div className="form__background">
          <div className="form__container">
            {this.props.inputs}
            {this.props.agreement}
            {this.props.buttons}
          </div>
        </div>
      </div>
    );
  }
}
