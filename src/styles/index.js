import React from 'react';
import styled from 'styled-components';

// VARIABLES
// Colors
export const color_light = '#ffffff';
export const color_dark = '#1C1B20';
export const color_orange = '#ffc371';
export const color_pink = '#ff5f6d';
export const color_subtle = '#F8F8F8';
export const color_dark_fade = 'rgba(28,27,32,0.9)';
export const color_subtle_fade = 'rgba(248,248,248, 0.6)';

//Media Queries
export const mobile = '(max-device-width : 480px)';
export const tablet = '(max-device-width : 1024px)';

// FUNCTIONS
// Flexbox
export const FlexFunc = (direction, justifyC, alignI) => {
	return `
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justifyC};
  align-items: ${alignI};
  `;
};

// Components
export const PageSection = styled.section`
	width: 100%;
	${FlexFunc('column', 'space-evenly', 'center')};
`;

export const SectionSVG = styled.svg`
	width: 100%;
	z-index: 5000;
`;
export const AboutSVG = () => {
	return (
		<SectionSVG viewBox="0 0 806 201" fill="none">
			<path d="M0 0H806V193C463 245 68 9 0 193V0Z" fill="url(#paint_linear)" />
			<defs>
				<linearGradient
					id="paint_linear"
					x1="-2.12592e-06"
					y1="84"
					x2="806"
					y2="88"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0.8" stopColor="#FF5F6D" />
					<stop offset="1" stopColor="#FFC371" />
				</linearGradient>
			</defs>
		</SectionSVG>
	);
};

export const SVGContainerDiv = styled.div`
	width: 100%;
	position: relative;
	margin-bottom: 5rem;
`;
export const AboutSVGContainer = () => {
	return (
		<SVGContainerDiv>
			<AboutSVG />
		</SVGContainerDiv>
	);
};

export const ProjectsSVG = () => {
	return (
		<SectionSVG viewBox="0 0 806 201" fill="none">
			<path d="M806 0H0V193C343 245 738 9 806 193V0Z" fill="#1C1B20" />
		</SectionSVG>
	);
};

export const ProjectsSVGContainer = () => {
	return (
		<SVGContainerDiv>
			<ProjectsSVG />
		</SVGContainerDiv>
	);
};

