import styled from "styled-components";

export const Button = styled.button<{ w: string; h: string }>`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  background-color: ${(props) => props.theme.buttonColor};
  border: none;
  border-bottom: 5px solid ${(props) => props.theme.highlightColor};
  border-radius: 5px;
  color: ${(props) => props.theme.textColor};
  font-size: 22px;
  margin-bottom: 5px;
  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
    transition: background-color 0.1s ease-in-out;
  }
`;
