import React from "react";
import LogoTop from "./components/logo-top";
import LogoBottom from "./components/logo-bottom";
import Email from "./components/email";
import Recover from "./components/recover";
import Register from "./components/register";
import SignIn from "./components/sign-in";
import Subscribe from "./components/subscribe";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="main">
        <LogoTop />
        <div className="cols">
          <div className="col col-left">
            <Register />
            <Email />
          </div>
          <div className="col col-right">
            <SignIn />
            <Recover />
            <Subscribe />
            {/* <LogoBottom /> */}
          </div>
        </div>
      </div>
    );
  }
}
