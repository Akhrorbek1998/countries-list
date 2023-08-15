import searchIcon from "../assets/search.svg";
import { COUNTRY_REGIONS } from "../constants";

const SearchCountry = ({ countryName, setCountryName, setRegionName }) => {
  return (
    <div className="md:flex md:items-center space-y-3 justify-between flex-wrap max-w-[1200px] px-4 mx-auto pt-10">
      <div className="py-3 flex px-4 md:w-5/12  shadow-sm rounded-md transition-shadow duration-300 bg-white hover:shadow-md">
        <img className="mx-4 cursor-pointer" src={searchIcon} alt="" />
        <input
          className="focus:outline-none w-full"
          type="search"
          placeholder="Search for a country…"
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
        />
      </div>

      <div className="selected ">
        <select
          className="py-3 px-4 rounded-md focus:outline-none block ms-auto"
          id=""
          onChange={(e) => setRegionName(e.target.value)}
        >
          {COUNTRY_REGIONS.map((region) => (
            <option key={region.label} value={region.value}>
              {region.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchCountry;
