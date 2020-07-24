import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { faFile } from '@fortawesome/free-solid-svg-icons';
import { FlexFunc, color_dark, color_pink, color_subtle, mobile } from '../styles';

const Nav = props => {
	return (
		<NavContainer counter={props.counter}>
			<NavName counter={props.counter}>EMILY ABRAHART</NavName>
			<LinkContainer counter={props.counter}>
				<SocialLink href="https://github.com/EmilyAbrahart" target="_blank">
					<FontAwesomeIcon icon={faGithub} />
				</SocialLink>
				<SocialLink
					href="https://www.linkedin.com/in/emilyabrahart"
					target="_blank"
				>
					<FontAwesomeIcon icon={faLinkedin} />
				</SocialLink>
				{/* <SocialLink href="#">
					<FontAwesomeIcon icon={faFile} />
				</SocialLink> */}
			</LinkContainer>
		</NavContainer>
	);
};

const NavContainer = styled.div`
	justify-content: flex-start;
	align-items: baseline;
	display: flex;
	position: absolute;
	top: 1rem;
	left: 1rem;
	z-index: 1000;
	transition: all 0.5s ease-out;

	@media ${mobile} {
		width: 100%;
		justify-content: center;
	}
`;

const NavName = styled.div`
	font-weight: bold;
	letter-spacing: 2px;
	font-size: 13px;
	color: ${props => (props.counter > 3 ? color_dark : color_subtle)};
	transition: all 0.5s ease-out;
`;
const LinkContainer = styled.div`
	${FlexFunc('row', 'space-evenly', 'flex-start')}
	a {
		color: ${props => (props.counter === 4 ? color_dark : color_subtle)};
		transition: all 0.5s ease-out;
	}
`;

const SocialLink = styled.a`
	font-size: 1rem;
	color: ${props => (props.counter === 4 ? color_dark : color_subtle)};
	padding: 0 0.5rem;
	margin-left: 1rem;

	&:hover {
		color: ${color_pink};
	}
`;
export default Nav;
