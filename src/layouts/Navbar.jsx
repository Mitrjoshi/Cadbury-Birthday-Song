import { Link } from "react-router-dom";
import { Sidemenu } from "./";

const Navbar = () => {
  return (
    <div className="bg-[#320071] h-[70px] flex px-[12px] justify-between items-center fixed w-full">
      <Link
        to="/home"
        onClick={() => {
          sessionStorage.removeItem("userData");
        }}
      >
        <img
          src="https://images.ctfassets.net/pmzhtobns06n/4SYGxSkN1WXsb8PWxH4o1A/94af21c92e7d70c8af20692ac57c0180/Cadbury_GlobalNavigation_BrandLogo_Desktop.svg?q=80"
          alt="Cadbury"
          className="h-[50px]"
        />
      </Link>
      <Sidemenu />
    </div>
  );
};

export default Navbar;
