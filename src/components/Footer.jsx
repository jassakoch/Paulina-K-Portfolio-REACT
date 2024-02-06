import React from 'react';
// Importing react-icons libary 
import { FaGithub, FaLinkedin,  FaStackOverflow } from "react-icons/fa";

function Footer() {
    //This will handle the click events for the icons
    const iconUrls = {
        github: "https://github.com/jassakoch", 
        linkedin: "https://www.linkedin.com/in/paulina-koch-b0a46132/",
        stackOverFlow: "https://stackoverflow.com/users/23346589/paulina-jassa-koch",

    };

   
    

return (

    <footer>
        <div className="footer-container">
   <a href={iconUrls.github}><FaGithub /></a>
   <a href={ iconUrls.linkedin}><FaLinkedin /></a>
   <a href= { iconUrls.stackOverFlow }> <FaStackOverflow /> </a>
   </div>
        
    </footer>
);
}

export default Footer;
