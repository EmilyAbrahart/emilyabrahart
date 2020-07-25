import React, { useState } from 'react';
import styled from 'styled-components';
import { FlexFunc, mobile } from '../styles';
import Home from './home';
import About from './about';
import Projects from './projects';
import Contact from './contact';
import Nav from './nav';
import Footer from './footer';

const Layout = () => {

	const [navBackground, setNavBackground] = useState(false);

	return (
		<AppContainer>
			<Nav navBackground={navBackground}/>
			<Home />
			<About />
			<Projects/>
			<Contact setNavBackground={setNavBackground}/>
			<Footer />
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
