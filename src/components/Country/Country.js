import React from "react";
import "./Country.css";

const Country = (props) => {
  // Country Dynamic Data
  const { name, population, region, flag } = props.country;
  const handleAddCountry = props.handleAddCountry;

  return (
    <>
      <div className="main-country">
        <h4>Country Name: {name}</h4>
        <img className="flagStyle" src={flag} alt="Country Flag" />
        <p>Population: {population}</p>
        <p>
          <small>Region: {region}</small>
        </p>
        <button onClick={() => handleAddCountry(name)}>Add Country</button>
      </div>
    </>
  );
};
export default Country;
