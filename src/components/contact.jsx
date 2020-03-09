import React from 'react';
import styled from 'styled-components';
import { color_subtle, color_dark, FlexFunc, mobile, tablet } from '../styles';

const Contact = props => {
	return (
		<ContactContainer counter={props.counter}>
			<h2>CONTACT ME</h2>

				<StyledForm
					action="https://formsubmit.co/emilyabrahart@gmail.com"
					method="POST"
				>
					<FieldContainer>
						<div className="label">NAME</div>
						<input type="text" name="name" />
					</FieldContainer>
					<FieldContainer>
						<div className="label">EMAIL</div>
						<input type="email" name="email" />
					</FieldContainer>
					<FieldContainer>
						<div className="label">MESSAGE</div>
						<textarea name="message" />
					</FieldContainer>
					<FormButton type="submit">Submit</FormButton>
				</StyledForm>

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
	h2 {
		letter-spacing: 0.5rem;
	}

	@media ${tablet} {
		${FlexFunc('column', 'center', 'center')}
	}
`;

const StyledForm = styled.form`
	width: 400px;
	@media ${mobile} {
		width: 90%;
	}
`;

const FieldContainer = styled.div`
	width: 100%;
	padding: 1rem 0;

	.label {
		letter-spacing: 0.5rem;
	}

	input {
		width: 100%;
		padding: 0.5rem 1rem;
		font-size: 0.8rem;
	}

	textarea {
		width: 100%;
		height: 8rem;
		padding: 0.5rem 1rem;
		font-size: 0.8rem;
	}
`;

const FormButton = styled.button`
	background-color: ${color_dark};
	color: ${color_subtle};
	border: 2px solid ${color_dark};
	padding: 0.5rem 1rem;
	box-sizing: border-box;

	&:hover {
		cursor: pointer;
		color: ${color_dark};
		background-color: ${color_subtle};
	}
`;
