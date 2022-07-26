import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa'
const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/samuel-ribeiro2/" target="_blank" rel="noreferrer">
        <BsLinkedin/>
      </a>
      <a href="https://github.com/SamuelR499" target="_blank" rel="noreferrer">
        <FaGithub/>
      </a>
    </div>
  );
};

export default HeaderSocials;
