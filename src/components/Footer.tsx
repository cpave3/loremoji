import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
  background-color: #2c3e50;
  padding: 5px;
  text-align: center;
  color: #7f8c8d;
`;

const Footer = () => (
  <Wrapper>
    {"Cameron Pavey"}
  </Wrapper>
);

export default Footer;
