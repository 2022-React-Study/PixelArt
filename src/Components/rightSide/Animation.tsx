import React from "react";
import styled from "styled-components";
import { FaPlay, FaObjectUngroup } from "react-icons/fa";
import { GoScreenFull, GoScreenNormal } from "react-icons/go";
import { Button } from "../../Styles/Reuse.styled";
//import Subimg from "../../Assets/img/preview.png";

const AnimationButtons = () => {
  return (
    <Container>
      <ButtonWrpper>
        <AnimationButton>
          <FaPlay />
        </AnimationButton>
        <AnimationButton>
          <GoScreenFull />
        </AnimationButton>
        <AnimationButton>
          <FaObjectUngroup />
        </AnimationButton>
      </ButtonWrpper>

      <Preview>
        <Img>이미지</Img>
      </Preview>

      <Button w={"180px"} h={"53px"}>
        Reset
      </Button>
    </Container>
  );
};

export default AnimationButtons;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 220px;
`;

const ButtonWrpper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 220px;
`;

const AnimationButton = styled.button`
  width: 35px;
  height: 40px;
  margin: 2px;
  background-color: ${(props) => props.theme.buttonColor};
  border: none;
  border-bottom: 5px solid ${(props) => props.theme.highlightColor};
  border-radius: 3px;
  color: ${(props) => props.theme.textColor};
  font-size: 15px;
  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
    transition: background-color 0.1s ease-in-out;
  }
`;

const Preview = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0px;
  width: 180px;
  height: 120px;
  background-color: ${(props) => props.theme.emptySpaceColor};
`;

const Img = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${(props) => props.theme.highlightColor};
`;
