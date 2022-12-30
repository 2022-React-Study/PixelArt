import React from "react";
import styled from "styled-components";

const ChangeDetail = () => {
  return (
    <Wrapper>
      <ChangeBox>
        <OverviewBox>Pixel Size</OverviewBox>
        <Input type="text" value="10" />
      </ChangeBox>

      <ChangeBox>
        <OverviewBox>Duration</OverviewBox>
        <Input type="text" value="1" />
      </ChangeBox>

      <PixelLocation>16, 2</PixelLocation>
    </Wrapper>
  );
};

export default ChangeDetail;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 220px;
  height: 220px;
`;

const ChangeBox = styled.div`
  width: 190px;
  height: 70px;
  border: 3px solid ${(props) => props.theme.highlightColor};
`;

const OverviewBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  background-color: ${(props) => props.theme.buttonColor};
  color: ${(props) => props.theme.textColor};
  font-size: 20px;
`;

const Input = styled.input`
  text-align: center;
  width: 100%;
  height: 50%;
  background-color: ${(props) => props.theme.numColor};
  border: none;
  color: ${(props) => props.theme.textColor};
  font-size: 20px;
  &:focus {
    background-color: #969696;
    color: #313131;
    transition: background-color 0.31s ease-in-out;
  }
`;

const PixelLocation = styled.div`
  width: 195px;
  text-align: center;
  font-size: 20px;
  color: ${(props) => props.theme.textColor};
`;
