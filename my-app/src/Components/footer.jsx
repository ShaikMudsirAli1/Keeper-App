import React from "react";

// const date = new Date();
// let currentYear = date.getFullYear();
const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright@{currentYear}</p>
    </footer>
  );
}

export default Footer;
