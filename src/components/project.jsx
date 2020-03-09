import React, { useState } from 'react';
import styled from 'styled-components';
import {
	FlexFunc,
	color_subtle,
	color_subtle_fade,
	color_dark,
	color_dark_fade
} from '../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Project = props => {
	const [infoVisible, setInfoVisible] = useState(false);
	return (
		<ProjectContainer active={props.active} id={props.id}>
			<HeaderContainer>{props.name.toUpperCase()}</HeaderContainer>
			<ProjectImg>
				<img src={props.img} alt={props.name} draggable="false" />
			</ProjectImg>
			<ProjectContentContainer id={props.id} infoVisible={infoVisible}>
				<h3>{props.name}</h3>
				<p>{props.description}</p>
				<TechnologyContainer>
					{props.technologies.map(t => {
						return <Technology key={t}>{t}</Technology>;
					})}
				</TechnologyContainer>
			</ProjectContentContainer>
			<ProjectButtonContainer>
				<InfoButton
					infoVisible={infoVisible}
					onClick={() => setInfoVisible(!infoVisible)}
				>
					INFO
				</InfoButton>
				<ProjectLink href={props.sitelink}>
					<ProjectButton>
						<FontAwesomeIcon icon={faGlobeAmericas} />
					</ProjectButton>
				</ProjectLink>
				<ProjectLink href={props.ghlink}>
					<ProjectButton>
						<FontAwesomeIcon icon={faGithub} />
					</ProjectButton>
				</ProjectLink>
			</ProjectButtonContainer>
		</ProjectContainer>
	);
};

export default Project;

const ProjectContainer = styled.div`
	border-bottom: none;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background: ${color_dark};
	width: 100%;
	height: 100%;
	position: absolute;
	transition: all 0.5s ease-out;
	overflow: hidden;
	box-sizing: border-box;
	left: ${props =>
		props.id > props.active ? '100%' : props.id < props.active ? '-100%' : '0'};
`;

const ProjectImg = styled.div`
	height: 100%;
	width: 100%;
	margin-bottom: 0;

	img {
		height: 100%;
	}
`;

const ProjectContentContainer = styled.div`
	position: absolute;
	height: 100%;
	width: 100%;
	transition: all 0.5s ease-out;
	top: ${props => (props.infoVisible ? '0' : '100%')};
	background: ${color_dark_fade};
	${FlexFunc('column', 'center', 'center')}
	word-wrap: normal;
	color: ${color_subtle};
	font-size: 0.7rem;
	padding: 1rem;
	user-select: none;
	overflow: hidden;
	z-index: 3;
`;
const HeaderContainer = styled.div`
	width: 100%;
	background-color: ${color_dark};
	color: ${color_subtle};
	text-align: center;
	position: absolute;
	top: 0;
	padding: 0.5rem 0;
	z-index: 6;
`;
const ProjectButtonContainer = styled.div`
	background-color: ${color_subtle};
	position: absolute;
	bottom: 0;
	${FlexFunc('row', 'space-between', 'center')}
	width: 100%;
	z-index: 5;
`;

const ProjectLink = styled.a`
	margin: 0;
	padding: 0;
	width: 50%;
`;
const ProjectButton = styled.button`
	width: 100%;
	padding: 0.25rem 1rem;
	font-size: 1rem;
	cursor: pointer;
	margin: 0;
	border: none;
	color: ${color_subtle};
	background-color: ${color_dark};
	outline: none;
	border: 1px solid ${color_dark};
	border-top: 1px solid ${color_dark_fade};
	border-bottom: none;

	&:hover {
		background-color: ${color_dark_fade};
	}
`;

const InfoButton = styled(ProjectButton)`
	background-color: ${props =>
		props.infoVisible ? color_dark_fade : color_dark};
`;

const TechnologyContainer = styled.div`
	${FlexFunc('row', 'space-between', 'center')}
	flex-wrap: wrap;
`;

const Technology = styled.div`
	background-color: ${color_dark};
	padding: 0.5rem 1rem;
	margin: 0 0.25rem;
	border: 1px solid ${color_subtle_fade};
`;
