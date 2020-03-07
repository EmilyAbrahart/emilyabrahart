import React from 'react';
import styled from 'styled-components';
import { color_subtle, color_dark, FlexFunc } from '../styles';

const Contact = props => {
	return (
		<ContactContainer counter={props.counter}>
			<h2>CONTACT ME</h2>
			<div>
				<form action="https://formsubmit.co/emilyabrahart@gmail.com" method="POST">
					<div>
						<p>Name</p>
						<input type="text" name="name" />
					</div>
					<div>
						<p>Email</p>
						<input type="email" name="email" />
					</div>
					<div>
						<p>Message</p>
						<textarea name="message" />
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		</ContactContainer>
	);
};

export default Contact;

const ContactContainer = styled.div`
	${FlexFunc('column', 'space-evenly', 'center')}
	position: absolute;
	top: ${props => (props.counter === 4 ? '0' : '100%')};
	height: 100%;
	width: 100%;
	background-color: ${color_subtle};
	transition: all 0.5s ease-out;
	color: ${color_dark};
`;
