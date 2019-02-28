import React, { Component, useState } from "react";

import styled from "styled-components";

import runOnce from "./utils/generator";

import ContentType from "./components/ContentType";
import TextType from "./components/TextType";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Muli:300,400,700", "sans-serif"],
  },
});

const Main = styled.article`
  display: flex;
  margin: 5px;
  flex-direction: column;
  flex: 1;
`;

const Floater = styled.div`
  background-color: #3498db;
  color: #ecf0f1;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  margin-bottom: 20px;
  position: relative;
  font-weight: bold;
  font-family: 'Muli', sans-serif;
  &::after {
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #3498db;
    position: absolute;
    top: 95%;
    left: 50%;
    transform: translateX(-50%);
    content: "";
  }

  animation: float 6s ease-in-out infinite;
  @keyframes float {
    0% {
      /* box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6); */
      transform: translatey(0px);
    }
    50% {
      /* box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2); */
      transform: translatey(-5px);
    }
    100% {
      /* box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6); */
      transform: translatey(0px);
    }
  }
`;

const generateOutput = (
  count: number,
  mode: string,
  multi: boolean,
  setOutput: (value: string) => void,
  setInit: (value: boolean) => void,
) => {
  // First generate the right number of sentences
  setInit(false);
  const sentences = [];
  const paraSize = 10;
  for (let i = 0; i < count; i++) {
    sentences.push(i > 0 && i % paraSize === 0 ? "\n\r" : runOnce(multi));
  }

  const stringified = sentences.reduce((acc, curr) => acc + curr, "");

  setOutput(stringified);
};

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const GenerateButton = styled.button`
  padding: 15px 30px;
  font-size: 1.2em;
  background-color: #27ae60;
  color: white;
  border: none;
  font-weight: bold;
  font-family: 'Muli', sans-serif;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background-color: #2ecc71;
  }
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

const Controls = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`;

const TextArea = styled.textarea`
  flex: 1;
  border: 1px solid #bdc3c7;
  font-size: 1.15em;
  font-family: "Muli", sans-serif;
  box-sizing: border-box;
  min-width: 100%;
  max-width: 100%;
`;

const Number = styled.input.attrs(
  (count: number, setCount: (value: number) => void) => ({
    type: "number",
    min: 1,
    max: 100,
  })
)`
  text-align: center;
  width: 30px;
  margin: 0 10px;
  border: none;
  border-bottom: 1px solid #bdc3c7;
  color: #95a5a6;
  font-size: 1em;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const App = () => {
  const [multi, setMulti] = useState(true);
  const [content, setContent] = useState("paragraph");
  const [count, setCount] = useState(20);
  const [output, setOutput] = useState("");
  const [init, setInit] = useState(true);
  return (
    <Wrapper>
      <Header />
      <Main>
        <Controls>
          <span>Generate</span>
          <Number
            value={count}
            onChange={e => setCount(parseInt(e.target.value))}
          />
          <span>&nbsp;{count === 1 ? "sentence" : "sentences"} of&nbsp;</span>
          <TextType
            handleChange={(value: boolean) => setMulti(value)}
            value={multi}
          />
        </Controls>
        <TextArea className="border flex-1" value={output} />
        <ContentArea>
          { init ? <Floater>Click here to get started!</Floater> : null }
          <GenerateButton
            onClick={() => {
              generateOutput(count, content, multi, setOutput, setInit);
            }}
          >
            Generate
          </GenerateButton>
        </ContentArea>
      </Main>
      <Footer />
    </Wrapper>
  );
};

export default App;
