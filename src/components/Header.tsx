import * as React from "react";
import styled from "styled-components";
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Baloo Tamma:300,400,700', 'cursive']
  }
});

const Wrapper = styled.header`
  padding: 5px;
  background-color: #e74c3c;
  text-align: center;
  color: #ecf0f1;
`;

const Heading = styled.h1`
  padding: 0;
  margin: 0;
  font-family: 'Baloo Tamma';
`;

const Header = () => (
  <Wrapper>
    <Heading>Loremoji Ipsum*</Heading>
  </Wrapper>
);

export default Header;
