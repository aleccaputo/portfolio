import React from "react";
import PropTypes from "prop-types";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import "animate.css";
import "./social.css";

const Social = ({ links }) => (
  <div className={"social--container"}>
    <div className={"social--link"}>
      <OutboundLink
        className={"animated faster"}
        href={links.linkedIn}
        target={"_blank"}
      >
        <FaLinkedinIn className={"social--icon social--linkedin"} />
      </OutboundLink>
    </div>
    <div className={"social-link"}>
      <OutboundLink
        className={"animated faster"}
        href={links.github}
        target={"_blank"}
      >
        <FaGithub className={"social--icon social--github"} />
      </OutboundLink>
    </div>
    <div className={"social--link"}>
      <OutboundLink
        className={"animated faster"}
        href={`mailto:${links.email}`}
      >
        <FaEnvelope className={"social--icon social--email"} />
      </OutboundLink>
    </div>
  </div>
);
Social.propTypes = {
  links: PropTypes.object
};

export default Social;
