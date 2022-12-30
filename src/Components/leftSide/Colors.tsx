import React from "react";
import styled from "styled-components";

const colors = [
  "#000000",
  "#FF0000",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#3F51B5",
  "#03A9F4",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#9EE07A",
  "#FFEB3B",
  "#FFC107",
  "#FF9800",
  "#FFCDD2",
  "#FF5722",
  "#795548",
  "#9E9E9E",
  "#607D8B",
  "#303F46",
  "#FFFFFF",
  "#383533",
  "#383533",
  "#383533",
  "#383533",
  "#383533",
  "#383533",
];

const Colors = () => {
  return (
    <Container>
      {colors.map((item) => (
        <ColorPicker bgColor={item} />
      ))}
    </Container>
  );
};

export default Colors;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 30px);
  grid-template-rows: repeat(5, 32px);
  gap: 3px;
`;

const ColorPicker = styled.div<{ bgColor: string }>`
  background-color: ${(props) => props.bgColor};
`;
