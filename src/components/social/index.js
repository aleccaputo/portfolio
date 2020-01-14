// @flow
import React from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import "animate.css";
import "./social.css";
import type {SocialMedia} from '../../pages';

type Props = {
    links: SocialMedia,
    email: string
}
const Social = ({ links, email }: Props) => (
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
        href={`mailto:${email}`}
      >
        <FaEnvelope className={"social--icon social--email"} />
      </OutboundLink>
    </div>
  </div>
);

export default Social;
