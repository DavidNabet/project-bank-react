import React from "react";
import { User } from "../components";

const Header = () => {
  return (
    <header>
      <div className="container" id="header">
        <h1>My Bank</h1>
        <User userName="Etienne" />
      </div>
    </header>
  );
};

export default Header;
