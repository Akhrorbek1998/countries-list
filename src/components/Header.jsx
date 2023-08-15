import { Link } from "react-router-dom";
import darkIcon from "../assets/dark-icon.svg";

const Header = () => {
  return (
    <header className="py-4 shadow-md bg-white relative">
      <div className="max-w-[1200px] mx-auto px-4 flex justify-between items-center">
        <h1 className="sm:text-lg md:text-2xl font-bold">
          <Link to={"/"}>Where in the world?</Link>
        </h1>
        <button className="flex items-center">
          <img src={darkIcon} alt="dark icon" />
          <span className="ml-2 font-semibold">Dark Mode</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
