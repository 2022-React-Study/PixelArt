import React from "react";
import styled from "styled-components";
import { ImDownload3, ImKeyboard } from "react-icons/im";

const ExtraFunc = () => {
  return (
    <Container>
      <CssButton>Css</CssButton>
      <DownloadButton>
        <ImDownload3 />
      </DownloadButton>
      <ExtaButtons>
        <ExtraButton>?</ExtraButton>
        <ExtraButton>
          <ImKeyboard />
        </ExtraButton>
      </ExtaButtons>
    </Container>
  );
};

export default ExtraFunc;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  width: 190px;
  height: 190px;
`;

const CssButton = styled.button`
  width: 190px;
  height: 55px;
  background-color: #e0e0e0;
  border: none;
  border-bottom: 5px solid #a0a0a0;
  border-radius: 3px;
  color: #313131;
  font-size: 20px;
`;

const DownloadButton = styled.button`
  width: 190px;
  height: 42px;
  background-color: #803c3c;
  border: none;
  border-bottom: 5px solid #733939;
  border-radius: 3px;
  color: #bbbbbb;
  font-size: 27px;
`;

const ExtaButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 190px;
  height: 50px;
`;

const ExtraButton = styled.button`
  width: 90px;
  height: 42px;
  border: none;
  background-color: #164075;
  border-bottom: 5px solid #2f5382;
  border-radius: 3px;
  color: #bbbbbb;
  font-size: 27px;
`;
