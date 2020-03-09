import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import photo from '../img/self-photo.jpg';
import {
	FlexFunc,
	color_accent,
	color_subtle,
	mobile,
	tablet
} from '../styles';
import { Icon } from '@iconify/react';
import bxlLess from '@iconify/icons-bx/bxl-less';
import bxlRedux from '@iconify/icons-bx/bxl-redux';
import styledComponents from '@iconify/icons-simple-icons/styled-components';

const About = props => {
	return (
		<AboutContainer>
			<AboutContent
				counter={props.counter}
				aboutExpanded={props.aboutExpanded}
				projectsExpanded={props.projectsExpanded}
			>
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
							<Icon icon={styledComponents} />
						</SkillDiv>
						<SkillDiv>
							<Icon icon={bxlLess} />
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
  background: ${color_accent};
  height: 100%;
  width: 100%;
  color: ${color_subtle};
	position: relative;
	overflow: hidden;
	/* a {
		position: absolute;
		top: 50%;
		right: 2rem;
	} */
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
	top: ${props => (props.counter > 2 ? '-100%' : '0')};
	opacity: ${props => (props.aboutExpanded ? '100%' : '0')};

	img {
		width: 100px;
		border-radius: 50%;
		border: 2px solid ${color_subtle};
	}

	p {
		font-size: 0.9rem;
	}

	h2 {
		letter-spacing: 0.5rem;
	}

	@media ${tablet} {
		padding: 1rem;
	}

	@media ${mobile} {
		padding: 0.6rem;
		width: 100%;
		line-height: 1rem;
		${FlexFunc('column', 'space-evenly', 'center')}
		left: 0;
		opacity: 100%;

		p {
			font-size: 0.8rem;
			margin: 1rem 0;

			&.examples {
				display: none;
			}
		}

		img {
			display: none;
		}
	}
`;
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
