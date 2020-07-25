import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { goToAnchor } from 'react-scrollable-anchor';
// import { faFile } from '@fortawesome/free-solid-svg-icons';
import {
	FlexFunc,
	color_dark,
	color_pink,
	color_subtle,
	mobile,
} from '../styles';

const Nav = ({ navBackground }) => {
	return (
		<NavContainer navBackground={navBackground}>
			<LinkContainer>
				<ShortcutButton onClick={() => goToAnchor('home')}>
					<NavName>EMILY ABRAHART</NavName>
				</ShortcutButton>

				{/* <SocialLink
					href="https://www.linkedin.com/in/emilyabrahart"
					target="_blank"
				>
					<FontAwesomeIcon icon={faLinkedin} />
				</SocialLink> */}
			</LinkContainer>
			<ShortcutContainer>
				<ShortcutButton onClick={() => goToAnchor('about')}>
					ABOUT
				</ShortcutButton>
				<ShortcutButton onClick={() => goToAnchor('projects')}>
					PROJECTS
				</ShortcutButton>
				<ShortcutButton onClick={() => goToAnchor('contact')}>
					CONTACT
				</ShortcutButton>
				<SocialLink href="https://github.com/EmilyAbrahart" target="_blank">
					<FontAwesomeIcon icon={faGithub} />
				</SocialLink>
			</ShortcutContainer>
		</NavContainer>
	);
};

const NavContainer = styled.nav`
	justify-content: space-between;
	align-items: baseline;
	display: flex;
	position: fixed;
	width: 100%;
	padding: 0.5rem 2rem;
	top: 0rem;
	left: 1rem;
	z-index: 1000;
	transition: all 0.5s ease-out;
	color: ${color_subtle};
	background: ${(props) => (props.navBackground ? color_dark : 'none')};
	@media ${mobile} {
		width: 100%;
		justify-content: center;
	}
`;

const NavName = styled.div`
	font-weight: bold;
	letter-spacing: 2px;
	color: ${(props) => (props.counter > 3 ? color_dark : color_subtle)};
	transition: all 0.5s ease-out;
`;
const LinkContainer = styled.div`
	${FlexFunc('row', 'space-evenly', 'center')}
`;

const SocialLink = styled.a`
	font-size: 1.5rem;
	padding: 0 0.5rem;
	margin-left: 1rem;
	color: ${color_subtle};

	&:hover {
		color: ${color_pink};
	}
`;

const ShortcutContainer = styled.div`
	${FlexFunc('row', 'space-evenly', 'flex-end')}
`;

const ShortcutButton = styled.button`
	color: ${color_subtle};
	background: none;
	border: none;
	outline: none;
	cursor: pointer;
	text-decoration: none;
	position: relative;

	&::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: ${color_subtle};
		visibility: hidden;
		transform: scaleX(0);
		transition: all 0.3s ease-in-out 0s;
	}

	&:hover::before {
		visibility: visible;
		transform: scaleX(1);
	}
`;

export default Nav;
