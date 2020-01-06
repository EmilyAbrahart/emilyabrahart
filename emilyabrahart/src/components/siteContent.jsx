import React from 'react';
import styled from 'styled-components';
import Home from './home';
import { FlexFunc } from '../styles/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const SiteContent = () => {
	return (
		<SiteContentContainer>
			<Home />
			<ScrollDiv>
				<FontAwesomeIcon icon={faChevronDown} />
				<FontAwesomeIcon icon={faChevronDown} />
				<FontAwesomeIcon icon={faChevronDown} />
			</ScrollDiv>
		</SiteContentContainer>
	);
};

export default SiteContent;

const SiteContentContainer = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
`;

const ScrollDiv = styled.div`
	position: absolute;
	bottom: -1rem;
	font-size: 1rem;
	width: 100%;
	${FlexFunc('row', 'space-between', 'center')}
`;
