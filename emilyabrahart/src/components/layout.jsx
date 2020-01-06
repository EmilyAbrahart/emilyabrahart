import React from 'react';
import Nav from './nav';
import SiteContent from './siteContent';
import styled from 'styled-components';
import { FlexFunc } from '../styles/styles';

const Layout = () => {
	return (
		<AppContainer>
			<Nav />
			<SiteContent />
		</AppContainer>
	);
};

export default Layout;

const AppContainer = styled.div`
	width: 100%;
	height: 100vh;
	${FlexFunc('column', 'center', 'center')}
	padding: 0 2rem 2rem 2rem;
`;
