import React, { useEffect, useState } from "react";
import Country from "./components/Country/Country";
import SelectCountry from "./components/Selectcountry/SelectCountry";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [selectCountry, setSelectedCountry] = useState([]);

  // API Calling
  useEffect(() => {
    const link = "https://restcountries.com/v2/all";
    fetch(link)
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // btn handler
  const handleAddCountry = (country) => {
    const newSelectedCountry = [...selectCountry, country];
    setSelectedCountry(newSelectedCountry);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Country Loaded: {countries.length}</h1>
          <h4>Country Added: {selectCountry}</h4>
          <SelectCountry selectCountry={selectCountry}></SelectCountry>
          {countries.map((country) => (
            <Country
              country={country}
              key={country.alpha3Code}
              handleAddCountry={handleAddCountry}
            ></Country>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
