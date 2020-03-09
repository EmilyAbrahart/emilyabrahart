import React from 'react';
import styled from 'styled-components';
import Swipe from 'react-easy-swipe';
import About from './about';
import {
	FlexFunc,
	color_accent,
	color_dark,
	color_subtle,
	mobile,
	tablet
} from '../styles';

const Home = props => {
	const onSwipeUp = () => {
		props.incrementCounter();
		props.setAboutExpanded(true);
	};

	const onSwipeDown = () => {
		props.decrementCounter();
		props.setAboutExpanded(false);
	};

	return (
		<HomeContainer>
			<Swipe onSwipeDown={onSwipeDown} onSwipeUp={onSwipeUp}>
				<HomeLeft aboutExpanded={props.aboutExpanded}>
					<About counter={props.counter} aboutExpanded={props.aboutExpanded} />
					<TaglineContainerLeft aboutExpanded={props.aboutExpanded}>
						<Tagline>Full Stack Web Developer</Tagline>
						<div>London, UK</div>
					</TaglineContainerLeft>
				</HomeLeft>
			</Swipe>
			<Swipe onSwipeDown={onSwipeDown} onSwipeUp={onSwipeUp}>
				<HomeRight>
					<HomeRightContent aboutExpanded={props.aboutExpanded}>
						<h1>
							EMILY
							<br /> ABRA <br /> HART<span>.</span>
						</h1>
						<TaglineContainerRight aboutExpanded={props.aboutExpanded}>
							<Tagline>Full Stack Web Developer</Tagline>
							<div>London, UK</div>
						</TaglineContainerRight>
					</HomeRightContent>
				</HomeRight>
			</Swipe>
		</HomeContainer>
	);
};

export default Home;

const HomeContainer = styled.div`
	${FlexFunc('row', 'center', 'center')}
	height: 100%;
	letter-spacing: 2px;
	position: relative;
	overflow: hidden;
`;

const HomeLeft = styled.div`
	position: absolute;
	top: 0;
	left: ${props => (props.aboutExpanded ? '0' : '-50%')};
	background: ${color_accent};
	height: 100%;
	width: 100%;
	color: ${color_subtle};
	padding: 1rem 2rem;
	${FlexFunc('column', 'center', 'flex-end')};
	font-size: 1.2rem;
	transition: all 0.5s ease-out;

	@media ${mobile} {
		top: ${props => (props.aboutExpanded ? '0' : '100%')};
		left: 0;
	}
`;

const HomeRight = styled.div`
	background: ${color_subtle};
	height: 100%;
	width: 100%;
	padding: 1rem 2rem;
	@media ${mobile} {
		${FlexFunc('column', 'center', 'flex-end')};
	}
`;

const HomeRightContent = styled.div`
	height: 100%;
	padding-left: 2rem;
	transition: all 0.5s ease-out;
	position: absolute;
	top: 0;
	left: ${props => (props.aboutExpanded ? '100%' : '50%')};
	opacity: ${props => (props.aboutExpanded ? '0' : '100%')};
	h1 {
		color: ${color_dark};
		font-weight: bold;
		font-size: 6rem;
		padding-top: 2rem;

		span {
			color: ${color_accent};
			font-size: 7rem;
		}
	}
	@media ${mobile} {
		padding-top: 3rem;
		top: ${props => (props.aboutExpanded ? '-100%' : '0')};
		left: 0;
	}
`;

const TaglineContainerLeft = styled.div`
	padding-bottom: 8rem;
	text-align: right;
	position: absolute;
	transition: all 0.5s ease-out;
	bottom: 2rem;
	right: ${props => (props.aboutExpanded ? '-25%' : '2rem')};

	@media ${tablet} {
		right: ${props => (props.aboutExpanded ? '-100%' : '2rem')};
	}

	@media ${mobile} {
		display: none;
	}
`;
const TaglineContainerRight = styled.div`
	padding-bottom: 8rem;
	text-align: right;
	transition: all 0.5s ease-out;
	color: ${color_dark};
	display: none;

	@media ${mobile} {
		display: block;
	}
`;

const Tagline = styled.div`
	font-weight: bold;
`;
