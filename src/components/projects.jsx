import React from 'react';
import styled from 'styled-components';
import {
	FlexFunc,
	color_accent,
	color_dark,
	color_subtle
} from '../styles/styles';

const Projects = props => {
	return (
		<ProjectsContainer projectsExpanded={props.projectsExpanded}>
			<h2>PROJECTS</h2>
			<div></div>
		</ProjectsContainer>
	);
};

export default Projects;

const ProjectsContainer = styled.div`
	${FlexFunc('row', 'center', 'center')}
	height: 100%;
	width: 100%;
	letter-spacing: 2px;
	position: absolute;
	overflow-x: hidden;
	background: ${color_subtle};
	top: ${props => (props.projectsExpanded ? '0' : '100%')};
	transition: all 0.5s linear;
`;
