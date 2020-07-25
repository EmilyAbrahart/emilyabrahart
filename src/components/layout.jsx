import React from 'react';
import styled from 'styled-components';
import { FlexFunc, mobile } from '../styles';
import Home from './home';
import About from './about';
import Projects from './projects';
import Contact from './contact';
import Nav from './nav';

const Layout = () => {
	return (
		<AppContainer>
			<Nav />
			<Home />
			<About />
			<Projects />
			<Contact />
		</AppContainer>
	);
};

export default Layout;

const AppContainer = styled.div`
	width: 100%;
	${FlexFunc('column', 'center', 'center')}


	@media ${mobile} {
		width: 100vw;
		padding: 0;
	}

	@media only screen and (max-device-height: 800px) {
		padding: 0;
	}
`;
