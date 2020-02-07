import * as React from "react";
import styled from "styled-components";
import pjson from "../../package.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Wrapper = styled.footer`
  background-color: #2c3e50;
  padding: 5px;
  text-align: center;
  color: #7f8c8d;
`;

const Link = styled.a`
  &,
  &:link,
  &:visited {
    text-decoration: none;
    color: #7f8c8d;
  }
`;

const SocialList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 10pt;
`;

const SocialItem = styled.li`
  padding: 5px 10px;
`;

const FooterItem = styled.div`
  font-size: 10pt;
`;

const Footer = () => (
  <Wrapper>
    <div>
      <SocialList>
        <SocialItem>
          <span>
            <FontAwesomeIcon icon={faUser} /> Cameron Pavey
          </span>
        </SocialItem>
        <SocialItem>
          <Link href="https://github.com/cpave3">
            {" "}
            <FontAwesomeIcon icon={faGithub} /> Github
          </Link>
        </SocialItem>
        <SocialItem>
          <Link href="https://twitter.com/cpave3">
            {" "}
            <FontAwesomeIcon icon={faTwitter} /> Twitter
          </Link>
        </SocialItem>
      </SocialList>
    </div>
    <FooterItem>
      <small>* No actual lorem ipsum inlcuded</small>
    </FooterItem>
    <FooterItem>
      <small>{`v${pjson.version}`}</small>
    </FooterItem>
  </Wrapper>
);

export default Footer;
