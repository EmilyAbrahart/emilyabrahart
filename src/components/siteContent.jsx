import React, { useState } from 'react';
import styled from 'styled-components';
import Home from './home';
import Projects from './projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import { color_dark, color_subtle, color_accent } from '../styles/styles';
import ProjectsArray from '../data/data';

const SiteContent = () => {
	const [aboutExpanded, setAboutExpanded] = useState(false);
	const toggleAboutExpand = () => {
		setAboutExpanded(!aboutExpanded);
	};

	const [projectsExpanded, setProjectsExpanded] = useState(false);
	const toggleProjectsExpand = () => {
		setProjectsExpanded(!projectsExpanded);
	};

	const [incrementing, setIncrementing] = useState(true);
	let [counter, setNextCounter] = useState(1);

	const stepCounter = () => {
		if (counter === 0 || counter === 2) {
			setIncrementing(!incrementing);
		}
		if (incrementing) {
			setNextCounter((counter += 1));
		} else setNextCounter((counter -= 1));
		console.log(counter);
	};

	const clickHandler = () => {
		if ((counter === 2 && incrementing) || counter === 3) {
			toggleProjectsExpand();
		} else {
			toggleAboutExpand();
		}
		stepCounter();
	};

	const [projects, setProjects] = useState(ProjectsArray);

	return (
		<SiteContentContainer>
			<Home
				aboutExpanded={aboutExpanded}
				toggleAboutExpand={toggleAboutExpand}
				projectsExpanded={projectsExpanded}
				toggleProjectsExpand={toggleProjectsExpand}
			/>
			<Projects
				projects={projects}
				toggleProjectsExpand={toggleProjectsExpand}
				projectsExpanded={projectsExpanded}
			/>
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
		props.counter === 1
			? color_dark
			: props.counter === 2
			? color_subtle
			: color_accent};
	font-size: 3rem;
	transform: rotate(0deg);
	transition: all 0.5s ease-out;
	transform: ${props =>
		props.counter === 2 && props.incrementing
			? `rotate(90deg)`
			: props.counter === 3
			? `rotate(270deg)`
			: props.counter === 2
			? `rotate(180deg)`
			: ''};
	position: absolute;
	right: 2rem;
	top: 50%;

	&:focus {
		outline: none;
	}
	&:hover {
		cursor: pointer;
	}
`;
