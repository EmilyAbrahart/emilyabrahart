import React from 'react';
import SiteContent from './siteContent';
import styled from 'styled-components';
import { FlexFunc, mobile } from '../styles';

const Layout = () => {
	return (
		<AppContainer>
			<SiteContent />
		</AppContainer>
	);
};

export default Layout;

const AppContainer = styled.div`
	width: 100%;
	height: 100vh;
	${FlexFunc('column', 'center', 'center')}
	padding: 2rem;
	overflow: hidden;

	@media ${mobile} {
		width: 100vw;
		padding: 0;
	}
`;
