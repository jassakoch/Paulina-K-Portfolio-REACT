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
   <a href={github}><FaGithub /></a>
   <a href={linkedin}><FaLinkedin /></a>
   <a href= {stackOverFlow }> <FaStackOverflow /> </a>
 
        
    </footer>
);
}

export default Footer;
