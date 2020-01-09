import React from 'react';
import styled from 'styled-components';
import Project from './project';
import { FlexFunc, color_subtle } from '../styles/styles';

const Projects = props => {
	return (
		<ProjectsContainer projectsExpanded={props.projectsExpanded}>
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
	background: ${color_subtle};
	top: ${props => (props.projectsExpanded ? '0' : '100%')};
	transition: all 0.5s ease-out;
	h2 {
		letter-spacing: 0.5rem;
	}
`;

const ProjectsContentContainer = styled.div`
	${FlexFunc('row', 'center', 'center')};
	height: 80%;
	width: 80%;
`;
