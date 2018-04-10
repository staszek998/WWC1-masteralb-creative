import React from "react";
import { countriesList } from "./countries";

export default class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenCountry: "Country"
    };
  }

  countryClickHandler = e => {
    this.setState({
      chosenCountry: e.currentTarget.innerText
    });

    e.currentTarget.parentElement.parentElement.classList.toggle("visible");
  };

  arrowClickHandler = e => {
    e.currentTarget.nextElementSibling.classList.toggle("visible");
  };

  countries = countriesList.map((country, i) => {
    return (
      <li
        key={i}
        onClick={this.countryClickHandler}
        className="select__dropdown__country"
      >
        {country}
      </li>
    );
  });

  componentWillMount = () => {
    this.countries.forEach(country => {});
  };

  render() {
    return (
      <div className="select">
        <div
          className="select__image"
          style={{ backgroundImage: `url(${this.props.imgSrc})` }}
        />
        <span className="select__input">{this.state.chosenCountry}</span>
        <i
          className="fas fa-caret-down select__arrow"
          onClick={this.arrowClickHandler}
        />
        <div className="select__dropdown">
          <ul>{this.countries}</ul>
        </div>
      </div>
    );
  }
}
