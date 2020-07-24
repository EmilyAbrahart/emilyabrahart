import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronRight,
	faChevronLeft,
	faCircle,
} from '@fortawesome/free-solid-svg-icons';
import Project from './project';
import ProjectsArray from '../data';
import {
	FlexFunc,
	color_dark,
	color_light,
	mobile,
	tablet,
	color_subtle,
	color_subtle_fade,
} from '../styles';

const Projects = (props) => {
	const [projects, setProjects] = useState(ProjectsArray);
	let [active, setActive] = useState(1);
	const length = projects.length;

	const incrementActive = () => {
		if (active + 1 <= length) {
			setActive((active += 1));
		}
	};
	const decrementActive = () => {
		if (active - 1 > 0) {
			setActive((active -= 1));
		}
	};

	return (
		<ProjectsContainer >
			<h2>PROJECTS</h2>

			<ProjectsContentContainer>
				{projects.map((project) => {
					return <Project active={active} key={project.id} {...project} />;
				})}
			</ProjectsContentContainer>
		</ProjectsContainer>
	);
};

export default Projects;

const ProjectsContainer = styled.div`
	${FlexFunc('column', 'center', 'center')};
	height: 100%;
	width: 100%;
	letter-spacing: 2px;

	background: ${color_dark};

	h2 {
		color: ${color_light};
		letter-spacing: 0.5rem;
	}

`;

const ProjectsContentContainer = styled.div`
	${FlexFunc('row', 'center', 'center')};
	flex-wrap: wrap;
	height: 100%;
	width: 100%;
	overflow-x: hidden;

`;

