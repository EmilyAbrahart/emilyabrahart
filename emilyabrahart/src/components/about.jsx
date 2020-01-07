import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faReact,
	faHtml5,
	faCss3,
	faJs,
	faNodeJs
} from '@fortawesome/free-brands-svg-icons';
import photo from '../img/self-photo.jpg';
import { FlexFunc, color_accent, color_subtle } from '../styles/styles';

const About = props => {
	return (
		<AboutContainer>
			<AboutContent aboutExpanded={props.aboutExpanded}>
				<img src={photo} alt="Emily Abrahart" />

				<AboutSection>
					<h2>ABOUT ME</h2>
					<p>
						I'm a full stack web developer currently studying with Lambda School
						and based in London, UK. During my time at Lambda I have also worked
						as a Section Lead, managing a cohort of staff and approximately 80
						students from across Europe and Africa.
					</p>

					<p>
						Having a passion for technology from a young age, prior to Lambda I
						had a career in technology infrastructure and support, predominantly
						within the finance sector.
					</p>
				</AboutSection>
				<AboutSection>
					<h2>TECHNOLOGIES</h2>
					<SkillsContainer>
						<SkillDiv>
							<FontAwesomeIcon icon={faJs} />
						</SkillDiv>
						<SkillDiv>
							<FontAwesomeIcon icon={faReact} />
						</SkillDiv>
						<SkillDiv>
							<FontAwesomeIcon icon={faNodeJs} />
						</SkillDiv>
						<SkillDiv>
							<FontAwesomeIcon icon={faHtml5} />
						</SkillDiv>
						<SkillDiv>
							<FontAwesomeIcon icon={faCss3} />
						</SkillDiv>
					</SkillsContainer>
					<p>Some examples of my work can be found below.</p>
				</AboutSection>
			</AboutContent>
		</AboutContainer>
	);
};

export default About;

const AboutContainer = styled.div`
${FlexFunc('column', 'space-evenly', 'center')}
  background: ${color_accent};
  height: 100%;
  width: 100%;
  color: ${color_subtle};
	position: relative;
	overflow-y: hidden;
	a {
		position: absolute;
		top: 50%;
		right: 2rem;
	}
`;

const AboutContent = styled.div`
	${FlexFunc('column', 'center', 'center')};
	height: 100%;
	width: 60%;
	max-width: 1024px;
	padding: 3rem;
	line-height: 1.5rem;
	position: absolute;
	transition: all 0.5s ease-out;
	left: ${props => (props.aboutExpanded ? '20%' : '0')};
	opacity: ${props => (props.aboutExpanded ? '100%' : '0')};

	img {
		width: 100px;
		border-radius: 50%;
		border: 2px solid ${color_subtle};
	}

	p {
		font-size: 1rem;
	}

	h2 {
		letter-spacing: 0.5rem;
	}
`;
const AboutSection = styled.section`
	text-align: center;
	padding: 2rem 0;
`;

const SkillsContainer = styled.div`
	${FlexFunc('row', 'center', 'center')}
`;
const SkillDiv = styled.div`
	font-size: 3rem;
	padding: 1rem;
	color: ${color_subtle};
`;
