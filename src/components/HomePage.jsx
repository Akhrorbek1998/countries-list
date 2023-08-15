import { useState } from "react";

import { SearchCountry, CountryList } from "./";

const HomePage = () => {
  const [countryName, setCountryName] = useState("");
  const [regionName, setRegionName] = useState("");

  return (
    <main className="">
      <SearchCountry
        countryName={countryName}
        setCountryName={setCountryName}
        setRegionName={setRegionName}
      />
      <CountryList countryName={countryName} regionName={regionName} />
    </main>
  );
};

export default HomePage;
