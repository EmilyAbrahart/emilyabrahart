import React from 'react';
import styled from 'styled-components';
import { FlexFunc, color_subtle, color_dark } from '../styles/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Project = props => {
	return (
		<ProjectContainer img={props.img}>
			<ProjectContainerCover>
				<ProjectContentContainer id={props.id} className="content">
					<h3>{props.name}</h3>
					<p>{props.description}</p>
					<ProjectButtonContainer>
						<ProjectLink href={props.sitelink}>
							<ProjectButton><FontAwesomeIcon icon={faGlobeAmericas}/></ProjectButton>
						</ProjectLink>

						<ProjectLink href={props.ghlink}>
							<ProjectButton><FontAwesomeIcon icon={faGithub}/></ProjectButton>
						</ProjectLink>
					</ProjectButtonContainer>
				</ProjectContentContainer>
			</ProjectContainerCover>
		</ProjectContainer>
	);
};

export default Project;

const ProjectContainer = styled.div`
	background: ${color_dark};
	width: 20%;
	height: 60%;
	margin: 1rem;
	border: 2px solid ${color_dark};
	background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url(${props => props.img});
	background-attachment: center;
	background-position: center;
	background-size: auto 100%;
`;

const ProjectContainerCover = styled.div`
	height: 100%;
	width: 100%;
	position: relative;
	overflow-y: hidden;
	.content {
		top: ${props => (props.id % 2 === 1 ? '100%' : '100%')};
		transition: all 0.5s ease-out;
	}
	&:hover {
		.content {
			top: 0;
		}
	}
`;

const ProjectContentContainer = styled.div`
	height: 100%;
	width: 100%;
	position: absolute;
	background: ${color_dark};
	${FlexFunc('column', 'center', 'center')}
	color: ${color_subtle};
	font-size: 0.7rem;
	padding: 1rem;
`;

const ProjectButtonContainer = styled.div`
	${FlexFunc('row', 'space-between', 'center')}
	width: 100%;
	position: absolute;
	bottom: 0;
`;

const ProjectLink = styled.a`
	margin: 0;
	padding: 0;
	width: 50%;
`;
const ProjectButton = styled.button`
	width: 100%;
	padding: 1rem 2rem;
	font-size: 1.5rem;
	cursor: pointer;
	margin: 0;
	border: 1px solid ${color_dark};

	&:hover {
		background-color: ${color_dark};
		color: ${color_subtle};
	}
`;
