import React from 'react';
import styled from 'styled-components';
import { FlexFunc, mobile } from '../styles';
import Home from './home';
import About from './about';
import Projects from './projects';
import Contact from './contact';
import Nav from './nav';
import Footer from './footer';
import { GlobalStyle } from '../styles/GlobalStyles';

const Layout = () => {
	return (
		<AppContainer>
			<Nav />
			<Home />
			<About />
			<Projects />
			<Contact />
			<Footer />
			<GlobalStyle />
		</AppContainer>
	);
};

export default Layout;

const AppContainer = styled.div`
	width: 100%;
	min-height: 100%;
	${FlexFunc('column', 'center', 'center')}


	@media ${mobile} {
		width: 100vw;
		padding: 0;
	}

	@media only screen and (max-device-height: 800px) {
		padding: 0;
	}
`;
