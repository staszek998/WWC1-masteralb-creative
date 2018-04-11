import React from "react";
import logoImage from "../../images/logo/image.png";
import logoText from "../../images/logo/text.png";

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
