import React from "react";
import Logo from "../../img/fav.png";
import "./LogoSearch.css";
import { UilSearch } from "@iconscout/react-unicons";
const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <img src={Logo} alt="" style={{ width: "25%" }} />
      <div className="Search">
        <input type="text" placeholder="#Explore" />
        <div className="s-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
