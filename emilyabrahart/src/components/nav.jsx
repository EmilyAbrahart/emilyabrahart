import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { FlexFunc, color_dark, color_accent } from '../styles/styles';

const Nav = () => {
	return (
		<NavContainer>
			<NavName>EMILY ABRAHART</NavName>
			<LinkContainer>
				<SocialLink href="https://github.com/EmilyAbrahart" target="_blank">
					<FontAwesomeIcon icon={faGithub} />
				</SocialLink>
				<SocialLink href="https://www.linkedin.com/in/emilyabrahart" target="_blank">
					<FontAwesomeIcon icon={faLinkedin} />
				</SocialLink>
				<SocialLink href="#">
					<FontAwesomeIcon icon={faFile} />
				</SocialLink>
				<SocialLink href="#">
					<FontAwesomeIcon icon={faEnvelopeSquare} />
				</SocialLink>
			</LinkContainer>
		</NavContainer>
	);
};

const NavContainer = styled.div`
	width: 100%;
	${FlexFunc('row', 'space-between', 'center')};
`;

const NavName = styled.div`
	color: ${color_dark};
	font-weight: bold;
	letter-spacing: 2px;
	font-size: 13px;
`;
const LinkContainer = styled.div`
	${FlexFunc('row', 'space-evenly', 'center')}
`;

const SocialLink = styled.a`
  font-size: 1rem;
  color: ${color_dark};
  padding: 0.5rem;
  margin-left: 1rem;

  &:hover {
    color: ${color_accent};
  }
`
export default Nav;
