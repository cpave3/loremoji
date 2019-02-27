import React, { Component, useState } from "react";

import styled from "styled-components";

import "./App.css";
import ContentType from "./components/ContentType";
import TextType from "./components/TextType";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Main = styled.article`
  display: flex;
  margin: 5px;
  flex-direction: column;
  flex: 1;
`;

const generateOutput = (count: number, content: string, multi: boolean) => {};

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
  &:hover {
    cursor: pointer;
    background-color: #2ecc71;
  }
`;

const ContentArea = styled.div`
  display: flex;
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
`;

const App = () => {
  const [multi, setMulti] = useState(true);
  const [content, setContent] = useState("paragraph");
  const [count, setCount] = useState(1);
  const [output, setOutput] = useState("");
  return (
    <Wrapper>
      <Header />
      <Main>
        <Controls>
          <span>Generate</span>
          <input
            type="number"
            onChange={e => setCount(parseInt(e.target.value))}
            value={count}
          />
          <ContentType
            handleChange={(value: string) => setContent(value)}
            value={content}
          />
          <span>&nbsp;of&nbsp;</span>
          <TextType
            handleChange={(value: boolean) => setMulti(value)}
            value={multi}
          />
        </Controls>
        <TextArea className="border flex-1" value={output} />
        <ContentArea>
          <GenerateButton
            onClick={() => {
              generateOutput(count, content, multi);
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
