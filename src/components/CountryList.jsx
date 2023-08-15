import { CountryCard, Loader } from "./";
import { UseCountry } from "../hooks/useCountry";
import { UseAllCountry } from "../hooks/useAllCountry";
import { useRegionCountry } from "../hooks/useRegionCountry";

const CountryList = ({ countryName, regionName }) => {
  const { isLoading, countryList } = UseCountry(countryName);
  const { allCountryList } = UseAllCountry();
  const { regionCountryList } = useRegionCountry(regionName);

  const regionsCountries = regionName ? regionCountryList : allCountryList;
  const displayCountrys = countryName ? countryList : regionsCountries;

  if (isLoading) {
    return <Loader className="mt-5" />;
  }

  return (
    <div className="max-w-[1200px] mx-auto mt-16 px-4 sm:flex justify-between items-center flex-wrap">
      {displayCountrys.map((country) => (
        <CountryCard
          key={country.name.common}
          title={country.name.common}
          img={country.flags.svg}
          population={country.population}
          regionValue={country.region}
          capital={country.capital}
        />
      ))}
    </div>
  );
};

export default CountryList;
