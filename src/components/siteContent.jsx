import React, { useState } from 'react';
import styled from 'styled-components';
import Home from './home';
import Projects from './projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import { color_dark, color_subtle, mobile, tablet } from '../styles';
import ProjectsArray from '../data/data';
import Nav from './nav';
import Contact from './contact';

const SiteContent = () => {
	const [aboutExpanded, setAboutExpanded] = useState(false);
	const [incrementing, setIncrementing] = useState(true);
	let [counter, setNextCounter] = useState(1);

	const stepCounter = () => {
		if (counter === 2) {
			setIncrementing(true);
		} else if (counter === 3) {
			setIncrementing(false);
		}
		if (incrementing) {
			setNextCounter((counter += 1));
		} else setNextCounter((counter -= 1));
		console.log(counter);
	};

	const clickHandler = () => {
		if (counter === 1) {
			setAboutExpanded(true);
		} else if (counter === 2 && !incrementing) {
			setAboutExpanded(false);
		}
		stepCounter();
	};

	const [projects, setProjects] = useState(ProjectsArray);

	return (
		<SiteContentContainer>
			<NavContainer counter={counter} aboutExpanded={aboutExpanded}>
				<Nav counter={counter} />
			</NavContainer>

			<Home counter={counter} aboutExpanded={aboutExpanded} />
			<Projects counter={counter} projects={projects} />
			<Contact counter={counter} />
			<AboutButton
				counter={counter}
				incrementing={incrementing}
				onClick={clickHandler}
			>
				<FontAwesomeIcon icon={faArrowAltCircleRight} />
			</AboutButton>
		</SiteContentContainer>
	);
};

export default SiteContent;

const SiteContentContainer = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	overflow-y: hidden;
`;

const AboutButton = styled.button`
	border: none;
	background: none;
	color: ${props =>
		props.counter === 2 || props.counter === 3 ? color_subtle : color_dark};
	font-size: 3rem;
	transform: rotate(0deg);
	transition: all 0.5s ease-out;
	transform: ${props =>
		(props.counter === 2 || props.counter === 3) && props.incrementing
			? `rotate(90deg)`
			: props.counter == 4 || (props.counter === 3 && !props.incrementing)
			? `rotate(270deg)`
			: props.counter === 2 || !props.incrementing
			? `rotate(180deg)`
			: ''};
	position: absolute;
	right: 2rem;
	bottom: 50%;

	@media ${tablet} {
		right: 1rem;
		bottom: 40%;
	}
	@media ${mobile} {
		right: 1rem;
		bottom: 1rem;
	}

	&:focus {
		outline: none;
	}
	&:hover {
		cursor: pointer;
	}
`;

const NavContainer = styled.div`
	left: ${props => (props.aboutExpanded ? '0' : '-20%')};
	transition: all 0.5s ease-out;
`;
