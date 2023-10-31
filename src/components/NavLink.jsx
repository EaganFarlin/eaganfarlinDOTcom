import React from "react";

const NavLink = ({ link, children }) => {
  return (
    <a className="mr-6 text-lg underline hover:no-underline" href={link}>
      {children}
    </a>
  );
};

export default NavLink;
