import React from "react";

const SelectCountry = (props) => {
  const selectCountry = props.selectCountry;
  //   let totalPopulation = 0;
  //   for (let i = 0; i < selectCountry.length; i++) {
  //     const country = selectCountry[i];
  //     totalPopulation = totalPopulation + country.population;
  //   }
  const totalPopulation = selectCountry.reduce(
    (sum, country) => sum + country.population,
    0
  );
  return (
    <>
      <div>
        <h2>{selectCountry.length}</h2>
        {/* <p>Total Population: {totalPopulation}</p> */}
      </div>
    </>
  );
};

export default SelectCountry;
