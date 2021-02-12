import React from "react";
import styled from "styled-components";
import {
  FlexFunc,
  color_dark,
  mobile,
  SiteHeading,
  PageSection,
} from "../styles";

const Home = () => {
  return (
    <HomeContainer>
      <SiteHeading>
        EMILY
        <br /> ABRAHART
      </SiteHeading>

      <TaglineContainerRight>
        <Tagline>Full Stack Web Developer</Tagline>
        <div>London, UK</div>
      </TaglineContainerRight>

      <HomeBottom />
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled(PageSection)`
  ${FlexFunc("row", "center", "center")};

  @media ${mobile} {
    ${FlexFunc("column", "center", "center")};
    h1 {
      text-align: center;
    }
  }
`;

const TaglineContainerRight = styled.div`
  padding-bottom: 8rem;
  text-align: right;
  color: ${color_dark};

  @media ${mobile} {
    display: block;
  }
`;

const Tagline = styled.div`
  font-weight: bold;
`;
const HomeBottom = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;

  background: rgb(255, 95, 109);
  background: linear-gradient(
    90deg,
    rgba(255, 95, 109, 1) 80%,
    rgba(255, 195, 113, 1) 100%
  );
`;

const AnchorDiv = styled.div`
  position: absolute;
  top: 0;
`;
