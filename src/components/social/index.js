import React from "react";
import PropTypes from "prop-types"
import {FaGithub, FaLinkedinIn, FaEnvelope} from "react-icons/fa";
import 'animate.css';
import './social.css'; 

const Social = ({links}) => (
  <div className={'social--container'}>
    <a className={'social--link'} href={links.linkedIn} target={'_blank'}>
      <FaLinkedinIn className={'social--icon social--linkedin animated faster'}/>
    </a>
    <a className={'social--link'} href={links.github} target={'_blank'}>
      <FaGithub className={'social--icon social--github animated faster'}/>
    </a>
    <a className={'social--link'} href={`mailto:${links.email}`}>
      <FaEnvelope className={'social--icon social--email animated faster'}/>
    </a>
  </div>
);
Social.propTypes = {
  links: PropTypes.object
}

export default Social;