import React, { useState } from 'react';
import styled from 'styled-components';
import Swipe from 'react-easy-swipe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronRight,
	faChevronLeft,
	faCircle
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
	color_subtle_fade
} from '../styles';

const Projects = props => {
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

	const onSwipeLeft = () => {
		incrementActive();
	};

	const onSwipeRight = () => {
		decrementActive();
	};

	return (
		<Swipe onSwipeUp={props.onSwipeUp} onSwipeDown={props.onSwipeDown}>
			<ProjectsContainer counter={props.counter}>
				<h2>PROJECTS</h2>
				<ProjectsFrame>
					<LeftArrow
						active={active}
						length={length}
						onClick={() => decrementActive()}
					>
						<FontAwesomeIcon icon={faChevronLeft} />
					</LeftArrow>
					<Swipe
						onSwipeLeft={onSwipeLeft}
						onSwipeRight={onSwipeRight}
						allowMouseEvents={true}
					>
						<ProjectsContentContainer>
							{projects.map(project => {
								return (
									<Project active={active} key={project.id} {...project} />
								);
							})}
						</ProjectsContentContainer>
					</Swipe>
					<RightArrow
						active={active}
						length={length}
						onClick={() => {
							incrementActive();
						}}
					>
						<FontAwesomeIcon icon={faChevronRight} />
					</RightArrow>
				</ProjectsFrame>

				<DotContainer>
					{projects.map(project => {
						return (
							<Dot key={project.id} id={project.id} active={active}>
								<FontAwesomeIcon icon={faCircle} />
							</Dot>
						);
					})}
				</DotContainer>
			</ProjectsContainer>
		</Swipe>
	);
};

export default Projects;

const ProjectsContainer = styled.div`
	${FlexFunc('column', 'center', 'center')};
	height: 100%;
	width: 100%;
	letter-spacing: 2px;
	position: absolute;
	background: ${color_dark};
	top: ${props =>
		props.counter === 3 ? '0' : props.counter > 3 ? '-100%' : '100%'};
	transition: all 0.5s ease-out;
	h2 {
		color: ${color_light};
		letter-spacing: 0.5rem;
	}
	@media ${tablet} {
		justify-content: center;
	}

	@media ${mobile} {
		padding-top: 3rem;
	}
`;

const ProjectsContentContainer = styled.div`
	${FlexFunc('row', 'center', 'center')};
	height: 400px;
	width: 600px;
	position: relative;
	overflow: hidden;

	@media ${tablet} {
		height: 50%;
	}
`;
const ProjectsFrame = styled.div`
	position: relative;
`;
const DotContainer = styled.div`
	${FlexFunc('row', 'center', 'center')};
	font-size: 0.7rem;
	padding-top: 0.5rem;
`;
const Dot = styled.div`
	color: ${props =>
		props.id === props.active ? color_subtle : color_subtle_fade};
	height: 100%;
	padding: 0.5rem;
`;

const Arrows = styled.div`
	color: ${color_subtle_fade};
	font-size: 2rem;

	&:hover {
		color: ${color_subtle};
		cursor: pointer;
	}
`;
const LeftArrow = styled(Arrows)`
	position: absolute;
	top: 50%;
	left: -3rem;
	display: ${props => (props.active > 1 ? 'block' : 'none')};
`;

const RightArrow = styled(Arrows)`
	position: absolute;
	top: 50%;
	right: -3rem;
	display: ${props => (props.active < props.length ? 'block' : 'none')};
`;
