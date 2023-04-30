import React from "react";
import { Navbar } from "./components/common/Navbar";

const Layout = (props) => {
  return (
    <div className="container mx-auto">
      <Navbar />
      {props.children}
    </div>
  );
};

export default Layout;
