import React from "react";
import styled from "styled-components";
import { Switch, withRouter, Route } from "react-router-dom";
import { useTransition, animated } from "react-spring";

import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Nav from "./components/nav";
import { GlobalStyle } from "./styles/GlobalStyles";
import { FlexFunc, mobile } from "./styles";

const App = ({ location }) => {
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, transform: "translate(100%, 0)" },
    enter: { opacity: 1, transform: "translate(0, 0)" },
    leave: { opacity: 0, transform: "translate(-50%, 0)" },
  });
  return (
    <AppContainer>
      <Nav />
      <Page>
        {transitions.map(({ item, props, key }) => (
          <PageContainer key={key} style={props}>
            <Switch location={item}>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </PageContainer>
        ))}
      </Page>

      <GlobalStyle />
    </AppContainer>
  );
};

export default withRouter(App);

const AppContainer = styled.div`
  height: 100vh;
  max-width: 100vw;
  ${FlexFunc("row", "center", "center")}

  @media ${mobile} {
    width: 100vw;
    padding: 0;
  }

  @media only screen and (max-device-height: 800px) {
    padding: 0;
  }
`;
const Page = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow-x: hidden;
`;
const PageContainer = styled(animated.div)`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
