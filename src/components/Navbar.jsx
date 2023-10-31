import React from "react";

import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <nav className="mb-16">
      <NavLink link="/">Home</NavLink>
      <NavLink link="https://github.com/EaganFarlin">Github</NavLink>
      <NavLink link="mailto:farlineagan@gmail.com">Email</NavLink>
    </nav>
  );
};

export default Navbar;
