import React from "react";
import styled from "styled-components";
import { FaArrowsAltH, FaArrowsAltV } from "react-icons/fa";

const ChangePixelSize = () => {
  return (
    <Containter>
      <Wrapper>
        <Arrow>
          <FaArrowsAltH />
        </Arrow>
        <ManageButton>
          <PixelSize>16</PixelSize>
          <ChangeButtons>
            <ChangeButton>+</ChangeButton>
            <ChangeButton>-</ChangeButton>
          </ChangeButtons>
        </ManageButton>
      </Wrapper>

      <Wrapper>
        <Arrow>
          <FaArrowsAltV />
        </Arrow>
        <ManageButton>
          <PixelSize>16</PixelSize>
          <ChangeButtons>
            <ChangeButton>+</ChangeButton>
            <ChangeButton>-</ChangeButton>
          </ChangeButtons>
        </ManageButton>
      </Wrapper>
    </Containter>
  );
};

export default ChangePixelSize;

const Containter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 200px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 220px;
  height: 70px;
`;

const Arrow = styled.span`
  font-size: 30px;
  color: #313131;
`;

const ManageButton = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => props.theme.highlightColor};
  width: 150px;
  height: 70px;
`;

const PixelSize = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid ${(props) => props.theme.highlightColor};
  width: 70px;
  height: 100%;
  background-color: ${(props) => props.theme.numColor};
  color: ${(props) => props.theme.textColor};
  font-size: 20px;
`;

const ChangeButtons = styled.div`
  width: 80px;
  height: 100%;
  border: 1px solid ${(props) => props.theme.highlightColor};
`;

const ChangeButton = styled.button`
  width: 100%;
  height: 50%;
  background-color: ${(props) => props.theme.buttonColor};
  border: 1px solid ${(props) => props.theme.highlightColor};
  color: ${(props) => props.theme.textColor};
  font-size: 25px;
  &:hover{
    background-color: ${(props) => props.theme.hoverColor};
  }
`;
