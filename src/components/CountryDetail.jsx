import { UseCountry } from "../hooks/useCountry";
import { Link, useParams } from "react-router-dom";
import backIcon from "../assets/back.svg";
import Loader from "./Loader";

const CountryDetail = () => {
  const { id } = useParams();
  const { isLoading, countryList } = UseCountry(id.slice(1));

  if (isLoading) {
    <Loader />;
  }

  return (
    <div className="w-[1200px] mx-auto mt-16">
      <Link className="flex items-center" to={"/"}>
        <img src={backIcon} alt="" />
        <span className="ml-2">Back</span>
      </Link>
      <div className=" mt-20 flex justify-between items-start">
        <img
          className="w-[560px] h-[460px] object-cover rounded-lg"
          src={countryList[0]?.flags.svg}
          alt="flag image"
          height="460"
        />

        <div className="w-[540px]">
          <h2 className="font-bold text-3xl">{countryList[0]?.name.common}</h2>

          <div className="flex justify-between mt-20">
            <div className="space-y-3">
              <p className="text-xl">
                <span className="font-medium">Native Name: </span>
                <span className="font-light">
                  {/* {countryList[0]?.name.nativeName?.nld?.common} */}
                </span>
              </p>
              <p className="text-xl">
                <span className="font-medium">Population: </span>
                <span className="font-light">{countryList[0]?.population}</span>
              </p>
              <p className="text-xl">
                <span className="font-medium">Region: </span>
                <span className="font-light">{countryList[0]?.region}</span>
              </p>
              <p className="text-xl">
                <span className="font-medium">Sub Region: </span>
                <span className="font-light">{countryList[0]?.subregion}</span>
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-xl">
                <span className="font-medium">Capital: </span>
                <span className="font-light">{countryList[0]?.capital}</span>
              </p>
              <p className="text-xl">
                <span className="font-medium">Top Lavel Domain: </span>
                <span className="font-light">{countryList[0]?.tld[0]}</span>
              </p>
            </div>
          </div>

          {/* <div className="mt-32 flex">
            <span className="font-semibold text-xl me-2">
              Border Countries:{" "}
            </span>
            <div>
              {countryList[0].borders.map((item) => (
                <span className="shadow inline-block py-1 px-8" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
