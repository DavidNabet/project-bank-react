import React from "react";
import icon from "../assets/user_icon.svg";

const User = ({ userName }) => {
  return (
    <div className="logged">
      <span>{userName}</span>
      <img src={icon} alt="" />
    </div>
  );
};

export default User;
