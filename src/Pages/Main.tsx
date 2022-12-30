import React from "react";
import styled from "styled-components";
import Field from "../Components/Field";
import LeftSide from "../Components/leftSide/LeftSide";
import RightSide from "../Components/rightSide/RightSide";
import MoreFrame from "../Components/topSide/MoreFrame";

const Main = () => {
  return (
    <Wrapper>
      <MoreFrame />

      <Containter>
        <LeftSide />
        <Field />
        <RightSide />
      </Containter>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
`;

const Containter = styled.div`
  width: 100vw;
  height: 1000px;
  background-color: ${(props) => props.theme.bgColor};
  display: flex;
  justify-content: space-between;
  padding: 1vw 5vw;
`;
