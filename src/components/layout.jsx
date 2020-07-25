import React, { useState } from 'react';
import styled from 'styled-components';
import { FlexFunc, mobile } from '../styles';
import Home from './home';
import About from './about';
import Projects from './projects';
import Contact from './contact';
import Nav from './nav';
import Footer from './footer';
import MobileNav from './mobileNav';
import { GlobalStyle } from '../styles/GlobalStyles';

const Layout = () => {
	const [navBackground, setNavBackground] = useState(false);
	const [navVisible, setNavVisible] = useState(false);

	return (
		<AppContainer>
			<MobileNav />
			<Nav navBackground={navBackground} navVisible={navVisible} />
			<Home setNavVisible={setNavVisible} />
			<About setNavVisible={setNavVisible} />
			<Projects />
			<Contact setNavBackground={setNavBackground} />
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
