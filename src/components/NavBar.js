import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
     {links.map((link) => {
          let navLinks = `#${link}`
          return <a href={navLinks} key={Math.random()*1}>
            {link}
          </a>
        })}
   </nav>;
}

export default NavBar;
