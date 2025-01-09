import React from "react";

const Navbar = (props) => {
  return (
    <nav
      style={{ padding: "10px", backgroundColor: "#007bff", color: "white" }}
    >
      <ul style={{ display: "flex", justifyContent: "space-between", listStyle: "none" }}>
        {props.links.map((link, index) => {
          return (
            <li key={index}>
              <a
                href={link.href}
                style={{ color: "white", textDecoration: "none" }}
              >
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
