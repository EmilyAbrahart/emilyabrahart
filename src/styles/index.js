import styled from "styled-components";

// VARIABLES
// Colors
export const color_light = "#ffffff";
export const color_dark = "#333333";
export const color_green = "#16a085";
export const color_grey = "#9d9d9d";
export const color_dark_fade = "rgba(28,27,32,0.9)";
export const color_subtle_fade = "rgba(248,248,248, 0.6)";

// Fonts
export const copy_font = "'Roboto', sans-serif";
export const tag_font = "'Caveat', cursive";
export const title_font = "'Yeseva One', cursive";

//Media Queries
export const mobile = "(max-device-width : 480px)";
export const tablet = "(max-device-width : 1024px)";

// FUNCTIONS
// Flexbox
export const FlexFunc = (direction, justifyC, alignI) => {
  return `
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justifyC};
  align-items: ${alignI};
  `;
};

// Components
export const PageSection = styled.section`
  width: 100%;
  height: 100%;
  ${FlexFunc("column", "center", "center")};

`;

export const SectionHeading = styled.h2`
  letter-spacing: 0.5rem;
  position: relative;

  &::before {
    content: "<h1>";
    display: block;
    font-family: ${tag_font};
    color: ${color_grey};
    font-size: 16px;
    position: absolute;
    top: -15px;
    left: -15px;
  }

  &::after {
    content: "</h1>";
    display: block;
    font-family: ${tag_font};
    color: ${color_grey};
    font-size: 16px;
    position: absolute;
    bottom: -15px;
    right: -15px;
  }
`;

export const SiteHeading = styled.h1`
  font-family: "Yeseva One", cursive;
  font-size: 70px;
  position: relative;

  &::before {
    content: "<h1>";
    display: block;
    font-family: ${tag_font};
    color: ${color_grey};
    font-size: 16px;
    position: absolute;
    top: -15px;
    left: -15px;
  }

  &::after {
    content: "</h1>";
    display: block;
    font-family: ${tag_font};
    color: ${color_grey};
    font-size: 16px;
    position: absolute;
    bottom: -15px;
    right: -15px;
  }
`;
