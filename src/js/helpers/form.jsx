import React from "react";

export default class from extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="form">
        <h2 className="form__title">Form Title</h2>
        <div className="form__background">
          <div className="form__container">
            {this.props.inputs}
            {this.props.agreement}
            {this.props.button}
          </div>
        </div>
      </div>
    );
  }
}
