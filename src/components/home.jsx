import React from 'react';
import styled from 'styled-components';
import About from './about';
import {
	FlexFunc,
	color_accent,
	color_dark,
	color_subtle
} from '../styles';

const Home = props => {
	return (
		<HomeContainer>
			<HomeLeft aboutExpanded={props.aboutExpanded}>
				<About
					counter={props.counter}
					aboutExpanded={props.aboutExpanded}
				/>
				<TaglineContainer aboutExpanded={props.aboutExpanded}>
					<Tagline>Full Stack Web Developer</Tagline>
					<div>London, UK</div>
				</TaglineContainer>
			</HomeLeft>
			<HomeRight>
				<HomeRightContent aboutExpanded={props.aboutExpanded}>
					<h1>
						EMILY
						<br /> ABRA <br /> HART<span>.</span>
					</h1>
				</HomeRightContent>
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
	transition: all 0.5s ease-out;
`;

const HomeRight = styled.div`
	background: ${color_subtle};
	height: 100%;
	width: 100%;
	padding: 1rem 2rem;
`;

const HomeRightContent = styled.div`
	padding-left: 2rem;
	transition: all 0.5s ease-out;
	position: absolute;
	left: ${props => (props.aboutExpanded ? '100%' : '50%')};
	opacity: ${props => (props.aboutExpanded ? '0' : '100%')};
	h1 {
		color: ${color_dark};
		font-weight: bold;
		font-size: 6rem;

		span {
			color: ${color_accent};
			font-size: 7rem;
		}
	}
`;

const TaglineContainer = styled.div`
	padding-bottom: 8rem;
	text-align: right;
	position: absolute;
	transition: all 0.5s ease-out;
	bottom: 2rem;
	right: ${props => (props.aboutExpanded ? '-25%' : '2rem')};
`;

const Tagline = styled.div`
	font-weight: bold;
`;
