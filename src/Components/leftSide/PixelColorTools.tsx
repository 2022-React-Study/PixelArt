import React from "react";
import styled from "styled-components";
import {
  BsPaintBucket,
  BsEyedropper,
  BsBrush,
  BsEraser,
  BsArrowsMove,
} from "react-icons/bs";

const tools = [
  <BsPaintBucket />,
  <BsEyedropper />,
  <BsBrush />,
  <BsEraser />,
  <BsArrowsMove />,
];

const PixelColorTools = () => {
  return (
    <Container>
      {tools.map((item, i) => (
        <ColorTool key={i}>{item}</ColorTool>
      ))}
    </Container>
  );
};

export default PixelColorTools;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 190px;
  height: 120px;
  margin-bottom: 10px;
`;

const ColorTool = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  font-size: 30px;
`;
