import React from 'react';
import styled from 'styled-components';
import Project from './project';
import ProjectsArray from '../data';
import {
	FlexFunc,
	color_dark,
	color_light,
	PageSection,
	AboutSVGContainer,
} from '../styles';
import ScrollableAnchor from 'react-scrollable-anchor';

const Projects = () => {
	const projects = ProjectsArray;

	return (
		<ProjectsContainer>
			<AboutSVGContainer />
			<ScrollableAnchor id="projects">
				<h2>PROJECTS</h2>
			</ScrollableAnchor>

			<ProjectsContentContainer>
				{projects.map((project) => {
					return <Project key={project.id} {...project} />;
				})}
			</ProjectsContentContainer>
		</ProjectsContainer>
	);
};

export default Projects;

const ProjectsContainer = styled(PageSection)`
	${FlexFunc('column', 'space-between', 'center')};
	letter-spacing: 2px;
	background: ${color_dark};
	position: relative;

	h2 {
		color: ${color_light};
		letter-spacing: 0.5rem;
	}
`;

const ProjectsContentContainer = styled.div`
	${FlexFunc('column', 'center', 'center')};
	flex-wrap: wrap;
	width: 100%;
	overflow-x: hidden;
	min-height: 100vh;
`;
