import React from "react";
import styled from "styled-components";
import { FaUndo, FaRedo } from "react-icons/fa";
import { Button } from "../../Styles/Reuse.styled";

const Settings = () => {
  return (
    <>
      <Button w={"195px"} h={"50px"}>New</Button>

      <ButtonWrapper>
        <Button w={"92px"} h={"50px"}>Load</Button>
        <Button w={"92px"} h={"50px"}>Save</Button>
      </ButtonWrapper>

      <ButtonWrapper>
        <Button w={"92px"} h={"43px"}>
          <FaUndo />
        </Button>
        <Button w={"92px"} h={"43px"}>
          <FaRedo />
        </Button>
      </ButtonWrapper>
    </>
  );
};
//25
export default Settings;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 195px;
  height: 50px;
  margin-top: 10px;
`;
