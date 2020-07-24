import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faReact,
	faJs,
	faNodeJs,
	faPython,
} from '@fortawesome/free-brands-svg-icons';
import photo from '../img/self-photo.jpg';
import { FlexFunc, color_pink, color_subtle, mobile, tablet } from '../styles';
import { Icon } from '@iconify/react';
import bxlRedux from '@iconify/icons-bx/bxl-redux';
import styledComponents from '@iconify/icons-simple-icons/styled-components';

const About = () => {
	return (
		<AboutContainer>
			<AboutContent>
				<img src={photo} alt="Emily Abrahart" />

				<AboutSection>
					<h2>ABOUT ME</h2>
					<p>
						I&apos;m a full stack web developer currently studying with Lambda
						School and based in London, UK. During my time at Lambda I have also
						worked as a Section Lead, managing a cohort of staff and
						approximately 80 students from across Europe and Africa.
					</p>

					<p>
						Having a passion for technology from a young age, prior to Lambda I
						had a career in technology infrastructure and support, predominantly
						within the finance sector.
					</p>
				</AboutSection>
				<AboutSection>
					<SkillsContainer>
						<SkillDiv>
							<FontAwesomeIcon icon={faJs} />
						</SkillDiv>
						<SkillDiv>
							<FontAwesomeIcon icon={faReact} />
						</SkillDiv>
						<SkillDiv>
							<Icon icon={bxlRedux} />
						</SkillDiv>
						<SkillDiv>
							<FontAwesomeIcon icon={faNodeJs} />
						</SkillDiv>
						<SkillDiv>
							<FontAwesomeIcon icon={faPython} />
						</SkillDiv>
						<SkillDiv>
							<Icon icon={styledComponents} />
						</SkillDiv>
					</SkillsContainer>
				</AboutSection>
				<p className="examples">Some examples of my work can be found below.</p>
			</AboutContent>
		</AboutContainer>
	);
};

export default About;

const AboutContainer = styled.div`
	${FlexFunc('column', 'space-evenly', 'center')}

	background: rgb(255,95,109);
	background: linear-gradient(
		90deg,
		rgba(255, 95, 109, 1) 66%,
		rgba(255, 195, 113, 1) 100%
	);
	height: 100%;
	width: 100%;
	color: ${color_subtle};
	position: relative;
	overflow-x: hidden;
`;

const AboutContent = styled.div`
	${FlexFunc('column', 'center', 'center')};
	height: 100%;
	width: 100%;
	max-width: 1024px;
	padding: 3rem;
	line-height: 1.5rem;


	img {
		width: 100px;
		border-radius: 50%;
		border: 2px solid ${color_subtle};
		@media only screen and (max-device-height: 800px) {
			display: none;
		}
	}

	p {
		font-size: 0.9rem;
	}

	h2 {
		letter-spacing: 0.5rem;
	}`;


const AboutSection = styled.section`
	text-align: center;
	padding: 1rem 0;
	@media ${mobile} {
		padding: 1rem 0 0 0;
	}
`;

const SkillsContainer = styled.div`
	${FlexFunc('row', 'center', 'center')}
	flex-wrap: wrap;
`;
const SkillDiv = styled.div`
	font-size: 3rem;
	padding: 1rem;
	color: ${color_subtle};
`;
