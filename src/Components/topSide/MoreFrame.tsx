import React from "react";
import styled from "styled-components";
import { IoAddOutline, IoTrashOutline, IoCopy } from "react-icons/io5";

const duration = [25, 50, 75, 100];

const MoreFrame = () => {
  return (
    <Container>
      <MakeFrameBtn>
        <IoAddOutline />
      </MakeFrameBtn>
      {duration.map((item) => (
        <Frame>
          <FrameTools>
            <Img>||</Img>
            <FrameTool>
              <IoTrashOutline />
            </FrameTool>
            <FrameTool>
              <IoCopy />
            </FrameTool>
          </FrameTools>
          <FrameDuration>{item}</FrameDuration>
        </Frame>
      ))}
    </Container>
  );
};

export default MoreFrame;

const Container = styled.div`
  width: 90vw;
  height: 95px;
  background-color: ${(props) => props.theme.emptySpaceColor};
  display: flex;
  align-items: center;
`;

const MakeFrameBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 100%;
  background-color: ${(props) => props.theme.buttonColor};
  border: none;
  border-bottom: 5px solid ${(props) => props.theme.highlightColor};
  color: ${(props) => props.theme.textColor};
  font-size: 30px;
`;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70px;
  height: 85px;
  margin: 5px;
  border: 2px solid black;
`;

const FrameTools = styled.div`
  display: grid;
  grid-template-columns: 36px 25px;
  grid-template-rows: repeat(2, 1fr);
  gap: 5px;
  width: 100%;
  height: 55px;
  background-color: ${(props) => props.theme.textColor};
`;

const Img = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.theme.highlightColor};
`;

const FrameTool = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  background-color: ${(props) => props.theme.buttonColor};
  color: white;
  border: 2px solid black;
  &:last-child {
    grid-column: 2/3;
    grid-row: 2/3;
  }
`;

const FrameDuration = styled.div`
  width: 100%;
  height: 25px;
  background-color: ${(props) => props.theme.numColor};
  text-align: center;
  color: ${(props) => props.theme.textColor};
  font-size: 20px;
  border-top: 2px solid black;
`;
