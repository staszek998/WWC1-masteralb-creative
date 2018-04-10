import React from "react";

export default class Agreement extends React.Component {
  constructor(props) {
    super(props);
  }

  clickHandler = e => {
    e.currentTarget.classList.toggle("agreement__checkbox--checked");
  };

  render() {
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
