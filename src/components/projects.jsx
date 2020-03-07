import React from 'react';
import styled from 'styled-components';
import Project from './project';
import { FlexFunc, color_dark, color_light } from '../styles';

const Projects = props => {
	return (
		<ProjectsContainer counter={props.counter}>
			<h2>PROJECTS</h2>
			<ProjectsContentContainer>
				{props.projects.map(project => {
					return <Project key={project.id} {...project} />;
				})}
			</ProjectsContentContainer>
		</ProjectsContainer>
	);
};

export default Projects;

const ProjectsContainer = styled.div`
	${FlexFunc('column', 'space-evenly', 'center')};
	height: 100%;
	width: 100%;
	letter-spacing: 2px;
	position: absolute;
	overflow-x: hidden;
	background: ${color_dark};
	top: ${props =>
		props.counter === 3
			? '0'
			: props.counter > 3
			? '-100%'
			: '100%'};
	transition: all 0.5s ease-out;
	h2 {
		color: ${color_light};
		letter-spacing: 0.5rem;
	}
`;

const ProjectsContentContainer = styled.div`
	${FlexFunc('row', 'center', 'center')};
	height: 80%;
	width: 80%;
`;
