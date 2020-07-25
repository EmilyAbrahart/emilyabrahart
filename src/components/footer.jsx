import React from 'react';
import styled from 'styled-components';
import {color_pink, color_subtle} from '../styles';

const Footer = () => {
	return (
		<FooterContainer>
			<p>Emily Abrahart &copy; 2020</p>
		</FooterContainer>
	);
};

export default Footer;

const FooterContainer = styled.footer`
	width: 100%;
	padding: 1rem 2rem;
	text-align: center;	background: ${color_pink};
	background: linear-gradient(
		90deg,
		rgba(255, 95, 109, 1) 80%,
		rgba(255, 195, 113, 1) 100%
	);
	color: ${color_subtle};

   p {
     margin-bottom: 0;
		 font-size: 0.8rem;
   }
`;
