import React from "react";
import logoImage from "../../images/logo/image.png";
import logoText from "../../images/logo/text.png";
import logoLink from "../../images/logo/link.png";

export default class LogoTop extends React.Component {
  render() {
    return (
      <div className="logo-bottom">
        <div className="logo-bottom__wrapper">
          <img src={logoImage} className="logo-bottom__image" alt="" />
          <img src={logoText} className="logo-bottom__text" alt="" />
        </div>
        <img src={logoLink} className="logo-bottom__link" alt="" />
      </div>
    );
  }
}
