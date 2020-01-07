import React from 'react';
import styled from 'styled-components';
import About from './about';
import {
	FlexFunc,
	color_accent,
	color_dark,
	color_subtle
} from '../styles/styles';

const Home = props => {
	return (
		<HomeContainer>
			<HomeLeft aboutExpanded={props.aboutExpanded}>
				<About
					aboutExpanded={props.aboutExpanded}
					projectsExpanded={props.projectsExpanded}
					toggleProjectsExpand={props.toggleProjectsExpand}
				/>
				<TaglineContainer aboutExpanded={props.aboutExpanded}>
					<Tagline>Full Stack Web Developer</Tagline>
					<div>London, UK</div>
				</TaglineContainer>
			</HomeLeft>
			<HomeLeftBlock></HomeLeftBlock>
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
	overflow-x: hidden;
`;

const HomeLeftBlock = styled.div`
	height: 100%;
	width: 100%;
`;
const HomeLeft = styled.div`
	position: absolute;
	left: ${props => (props.aboutExpanded ? '0' : '-50%')};
	background: ${color_accent};
	height: 100%;
	width: 100%;
	color: ${color_subtle};
	padding: 1rem 2rem;
	${FlexFunc('column', 'center', 'flex-end')};
	font-size: 1.2rem;
	transition: all 0.5s linear;
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

const TaglineContainer = styled.div`
	padding-bottom: 8rem;
	text-align: right;
	position: absolute;
	transition: all 0.5s linear;
	bottom: 2rem;
	right: ${props => (props.aboutExpanded ? '-25%' : '2rem')};
`;

const Tagline = styled.div`
	font-weight: bold;
`;
