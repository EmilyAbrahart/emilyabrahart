import React, { useState } from 'react';
import styled from 'styled-components';
import {
	FlexFunc,
	color_subtle,
	color_subtle_fade,
	color_dark,
	color_dark_fade,
	mobile,
} from '../styles';

const Project = (props) => {
	return (
		<ProjectContainer active={props.active} id={props.id}>
			<HeaderContainer>{props.name.toUpperCase()}</HeaderContainer>
			<ProjectImg>
				<img src={props.img} alt={props.name} draggable="false" />
			</ProjectImg>
		</ProjectContainer>
	);
};

export default Project;

const ProjectContainer = styled.div`
	display: flex;
	${FlexFunc('row', 'center', 'center')};
	background: ${color_dark};
	width: 400px;
	height: 400px;
	margin: 1rem;
	overflow: hidden;
	box-sizing: border-box;
`;

const ProjectImg = styled.div`
	height: 100%;
	width: 100%;
	margin-bottom: 0;

	img {
		height: 100%;
		@media ${mobile} {
			width: 100%;
			height: auto;
		}
	}
`;

const HeaderContainer = styled.div`
	width: 100%;
	background-color: ${color_dark};
	color: ${color_subtle};
	text-align: center;

`;
