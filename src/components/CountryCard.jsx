import { Link } from "react-router-dom";

const CountryCard = ({ img, title, population, regionValue, capital }) => {
  return (
    <Link to={`/detail/:${title}`}>
      <div className="border-neutral-900 mx-auto min-w-80 max-w-[475px] md:min-w-64 mb-8 bg-white rounded-md shadow">
        <img
          className="w-[475px] md:w-64 h-[200px] rounded-t-md object-cover"
          src={img}
          alt="img"
        />
        <div className="pt-5 pb-7 px-4">
          <h2 className="text-lg font-bold">{title}</h2>
          <p>
            <span className="font-medium">Popultion:</span> {population}
          </p>
          <p>
            <span className="font-medium">Region:</span> {regionValue}
          </p>
          <p>
            <span className="font-medium">Capital:</span> {capital}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
