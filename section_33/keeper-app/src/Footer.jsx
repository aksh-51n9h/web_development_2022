import React from "react";

export default Footer;

function Footer() {
    const year = new Date().getFullYear();
    return <footer><p>Copyright © { year}</p></footer>;
}