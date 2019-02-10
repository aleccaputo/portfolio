import React from "react";
import {FaGithub, FaLinkedinIn} from "react-icons/fa";
import 'animate.css';
import './social.css'; 

const Social = () => (
  <div className={'social--container'}>
    <a className={'social--link'} href={'https://www.linkedin.com/in/alec-caputo-80929199/'} target={'_blank'}>
      <FaLinkedinIn className={'social--icon social--linkedin animated faster'}/>
    </a>
    <a className={'social--link'} href={'https://github.com/aleccaputo'} target={'_blank'}>
      <FaGithub className={'social--icon social--github animated faster'}/>
    </a>
  </div>
);

export default Social;
