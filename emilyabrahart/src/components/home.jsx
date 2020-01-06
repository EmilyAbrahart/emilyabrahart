import React from 'react';
import styled from 'styled-components';
import {
	FlexFunc,
	color_accent,
	color_dark,
	color_subtle
} from '../styles/styles';

const Home = () => {
	return (
		<HomeContainer>
			<HomeLeft>
				<Tagline>Full Stack Web Developer</Tagline>
				<div>London, UK</div>
			</HomeLeft>
			<HomeRight>
				EMILY
				<br /> ABRA <br /> HART<span>.</span>
			</HomeRight>
		</HomeContainer>
	);
};

export default Home;

const HomeContainer = styled.div`
	${FlexFunc('row', 'center', 'center')}
	height: 100%;
	letter-spacing: 2px;
	position: relative;
`;

const HomeLeft = styled.div`
	background: ${color_accent};
	height: 100%;
	width: 100%;
	color: ${color_subtle};
	padding: 1rem 2rem;
	${FlexFunc('column', 'center', 'flex-end')};
	font-size: 1.2rem;
`;

const HomeRight = styled.div`
	background: ${color_subtle};
	color: ${color_dark};
	font-weight: bold;
	font-size: 6rem;
	height: 100%;
	width: 100%;
	padding: 1rem 2rem;

	span {
		color: ${color_accent};
		font-size: 7rem;
	}
`;

const Tagline = styled.div`
	padding-top: 6rem;
	font-weight: bold;
`;
