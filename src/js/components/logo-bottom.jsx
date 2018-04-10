import React from "react";
import logoImage from "../../images/logo/logo-image.svg";
import logoText from "../../images/logo/logo-text.svg";
import logoLink from "../../images/logo/logo-link.svg";

export default class LogoTop extends React.Component {
  constructor(props) {
    super(props);
  }
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
