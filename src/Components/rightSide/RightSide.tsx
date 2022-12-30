import React from "react";
import styled from "styled-components";
import AnimationButtons from "./Animation";
import ChangeDetail from "./ChangeDetail";
import ChangePixelSize from "./ChangePixelSize";

const RightSide = () => {
  return (
    <Wrapper>
      <AnimationButtons />
      <ChangePixelSize />
      <ChangeDetail />
    </Wrapper>
  );
};

export default RightSide;

const Wrapper = styled.div`
  width: 195px;
`;
