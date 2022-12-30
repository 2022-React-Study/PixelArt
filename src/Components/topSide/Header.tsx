import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <Title>Pixel Art</Title>
      <Overview>Make your own piece of work!!</Overview>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
  padding: 2vw 5vw;
`;

const Title = styled.h1`
  font-size: 60px;
  color: ${(props) => props.theme.textColor};
`;

const Overview = styled.p`
  font-size: 25px;
  color: ${(props) => props.theme.textColor};
`;
