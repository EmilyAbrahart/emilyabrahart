import React, { useState } from 'react';
import styled from 'styled-components';
import {
	FlexFunc,
	color_subtle,
	color_dark,
	color_pink,
	mobile,
} from '../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Project = (props) => {
	const [infoVisible, setInfoVisible] = useState(false);
	return (
		<ProjectContainer>
			<HeaderContainer>{props.name.toUpperCase()}</HeaderContainer>
			<ProjectImg
				onMouseEnter={() => setInfoVisible(true)}
				onMouseLeave={() => setInfoVisible(false)}
			>
				<HoverDiv infoVisible={infoVisible}>
					<TechnologiesDiv infoVisible={infoVisible}>
						{props.technologies.map((t) => {
							return <Technology key={t}>{t}</Technology>;
						})}
					</TechnologiesDiv>

					<ProjectLinkContainer infoVisible={infoVisible}>
						<ProjectLink href={props.sitelink} target="_blank">
							<ProjectButton>
								<FontAwesomeIcon icon={faGlobeAmericas} />
							</ProjectButton>
						</ProjectLink>

						<ProjectLink href={props.ghlink} target="_blank">
							<ProjectButton>
								<FontAwesomeIcon icon={faGithub} />
							</ProjectButton>
						</ProjectLink>
					</ProjectLinkContainer>
				</HoverDiv>

				<img src={props.img} alt={props.name} draggable="false" />
			</ProjectImg>
		</ProjectContainer>
	);
};

export default Project;

const ProjectContainer = styled.div`
	display: flex;
	${FlexFunc('column', 'center', 'center')};
	background: ${color_dark};
	margin: 1rem;
	width: 800px;
	max-width: 90vw;
	overflow: hidden;
`;

const ProjectImg = styled.div`
	height: 100%;
	width: 100%;
	position: relative;

	img {
		margin-bottom: 0;
		border: 2px solid white;
		@media ${mobile} {
			width: 100%;
			height: auto;
		}
	}
`;

const HoverDiv = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	display: ${(props) => (props.infoVisible ? `block` : `none`)};
	background: none;
	overflow: hidden;

`;

const HeaderContainer = styled.div`
	width: 100%;
	background-color: ${color_dark};
	margin-bottom: 1rem;
	color: ${color_subtle};
	text-align: center;
`;

const TechnologiesDiv = styled.div`
	position: absolute;
	bottom: 1rem;
	left: 1rem;
`;

const Technology = styled.div`
	border-radius: 4px;
	background-color: ${color_pink};
	text-align: center;
	padding: 4px;
	margin-top: 4px;
	color: ${color_subtle};
`;

const ProjectLinkContainer = styled.div`
	position: absolute;
	bottom: 1rem;
	right: 1rem;
`;
const ProjectLink = styled.a`
	margin: 0;
	padding: 0;
	width: 50%;
	background-color: ${color_pink};
	color: ${color_subtle};
`;

const ProjectButton = styled.button`
	width: 100%;
	font-size: 2rem;
	cursor: pointer;
	margin: 0;
	color: ${color_subtle};
	background-color: ${color_pink};
	outline: none;
	border: 1px solid ${color_pink};
	border-radius: 4px;
	text-align: center;
	padding: 4px;
	margin-top: 4px;
	&:hover {
	}
`;
