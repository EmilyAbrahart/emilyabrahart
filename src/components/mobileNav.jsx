import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { goToAnchor } from 'react-scrollable-anchor';
import { FlexFunc, color_dark, color_subtle, mobile } from '../styles';

const Nav = ({ navBackground, navVisible }) => {
	const [menuVisible, setMenuVisible] = useState(false);

	return (
		<NavContainer navBackground={navBackground} navVisible={navVisible}>
			<NavBar>
				<ShortcutButton onClick={() => goToAnchor('home')}>
					<NavName>EMILY ABRAHART</NavName>
				</ShortcutButton>
				<MenuButton onClick={() => setMenuVisible(!menuVisible)}>
					<FontAwesomeIcon icon={faBars} />
				</MenuButton>
			</NavBar>

			<ShortcutContainer menuVisible={menuVisible}>
				<ShortcutButton onClick={() => goToAnchor('about')}>
					ABOUT
				</ShortcutButton>
				<ShortcutButton onClick={() => goToAnchor('projects')}>
					PROJECTS
				</ShortcutButton>
				<ShortcutButton onClick={() => goToAnchor('contact')}>
					CONTACT
				</ShortcutButton>
				<ShortcutButton>
					<a href="https://github.com/EmilyAbrahart">
						GITHUB
					</a>
				</ShortcutButton>
			</ShortcutContainer>
		</NavContainer>
	);
};

const NavContainer = styled.nav`
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	position: fixed;
	width: 100%;
	padding: 0.5rem 2rem;
	bottom: 0;
	z-index: 1000;
	color: ${color_subtle};
	background: ${color_dark};
	display: none;
	@media ${mobile} {
		width: 100%;
		display: flex;
	}
`;

const NavBar = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

const NavName = styled.div`
	font-weight: bold;
	letter-spacing: 2px;
`;

const ShortcutContainer = styled.div`
	${FlexFunc('column', 'flex-start', 'center')}
	max-height: ${(props) => (props.menuVisible ? '800px' : '0')};
	transition: all 0.5s linear;
`;

const MenuButton = styled.button`
	color: ${color_subtle};
	background: none;
	border: none;
	outline: none;
	cursor: pointer;
	text-decoration: none;
	font-size: 1.4rem;
`;

const ShortcutButton = styled.button`
	color: ${color_subtle};
	background: none;
	border: none;
	outline: none;
	cursor: pointer;
	text-decoration: none;
	position: relative;
	padding: 1rem;

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

	a {
		text-decoration: none;
		color: ${color_subtle};
	}
`;

export default Nav;
