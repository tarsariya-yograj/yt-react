import React from "react";
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <div>
      <Link to="/" >
        Home
      </Link>

      <Link to="/Login" >
        Login
      </Link>

      <Link to="/Product">
        Product
      </Link>

      <Link to="/Signup">
        Signup
      </Link>
      <Link to="/Error">
        Error
      </Link>
    </div>
  );
};

export default Nav;
