import React from 'react';
import SiteContent from './siteContent';
import styled from 'styled-components';
import { FlexFunc, mobile } from '../styles';
import useWindowDimensions from '../utils/useWindowDimensions';

const Layout = () => {
	const { height, width } = useWindowDimensions();
	return (
		<AppContainer height={height}>
			<SiteContent />
		</AppContainer>
	);
};

export default Layout;

const AppContainer = styled.div`
	width: 100%;
	height: 100vh;
	height: ${props => props.height}px;
	${FlexFunc('column', 'center', 'center')}
	padding: 2rem;
	overflow: hidden;

	@media ${mobile} {
		width: 100vw;
		padding: 0;
		overscroll-behavior: none;
	}

	@media only screen and (max-device-height: 800px) {
		padding: 0;
	}
`;
