import React from "react";
import logoImage from "../../images/logo/logo-image.svg";
import logoText from "../../images/logo/logo-text.svg";

export default class LogoTop extends React.Component {
  render() {
    return (
      <div className="logo-top">
        <img src={logoImage} alt="" />
        <img src={logoText} alt="" />
      </div>
    );
  }
}
