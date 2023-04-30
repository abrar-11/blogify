import React from "react";
import { Link } from "react-router-dom";
import { colors } from "../../constants/theme";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full  py-5">
      <div className="textHover">Write and Share</div>
      <div className="flex justify-end items-center space-x-4">
        <Link to="#" className="">
          Popular
        </Link>
        <Link to="#" className="">
          New
        </Link>
        <Link to="#" className="">
          Reading list
        </Link>
        <Link to="#" className="">
          Topics
        </Link>
      </div>
    </div>
  );
};
