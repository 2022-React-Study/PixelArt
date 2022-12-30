import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    highlightColor: string;
    textColor: string;
    buttonColor: string;
    numColor: string;
    hoverColor: string;
    emptySpaceColor: string;
  }
}
