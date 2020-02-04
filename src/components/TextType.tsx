import * as React from "react";
import styled from "styled-components";

interface IProps {
  handleChange: (value: boolean) => void;
  value: boolean;
}

const Wrapper = styled.div`
  display: inline-block;
`;

const Type = styled.span`
  color: #95a5a6;
  cursor: pointer;
  border-bottom: 1px solid #bdc3c7;
  font-size: 1em;
`;

const TextType = (props: IProps) => {
  const { handleChange, value } = props;
  return (
    <Wrapper>
      <Type
        data-testid="typeToggle"
        role="presentation"
        onClick={() => handleChange(!value)}
      >
        {`${value ? "Multibyte" : "Plain"}`}
      </Type>
      <span> text</span>
    </Wrapper>
  );
};

export default TextType;
