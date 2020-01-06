import React from 'react';
import styled from 'styled-components';
import { FlexFunc } from '../styles/styles';
import Home from './home';

const SiteContent = () => {
	return (
		<SiteContentContainer>
			<Home />
		</SiteContentContainer>
	);
};

export default SiteContent;

const SiteContentContainer = styled.div`
  width: 100%;
  height: 100%;
`;
