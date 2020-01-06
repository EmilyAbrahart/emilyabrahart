import React from 'react';
import Nav from './nav';
import SiteContent from './siteContent';
import styled from 'styled-components';
import { FlexFunc } from '../styles/styles';

const Layout = () => {
	return (
		<AppContainer>
			<PageContainer>
				<Nav />
				<SiteContent />
			</PageContainer>
		</AppContainer>
	);
};

export default Layout;

const AppContainer = styled.div`
	width: 100%;
	height: 100vh;
	${FlexFunc('column', 'center', 'center')}
	
`;
const PageContainer = styled.div`
	width: 100%;
	max-width: 1024px;
	margin-bottom: 2rem;
	height: 100%;
`;
