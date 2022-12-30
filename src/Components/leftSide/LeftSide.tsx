import React from "react";
import styled from "styled-components";
import Colors from "./Colors";
import ExtraFunc from "./ExtraFunc";
import PixelColorTools from "./PixelColorTools";
import Settings from "./Settings";

const LeftSide = () => {
  return (
    <Container>
      <Settings />
      <PixelColorTools />
      <Colors />
      <ExtraFunc />
    </Container>
  );
};

export default LeftSide;

const Container = styled.div`
  width: 220px;
`;
