import React from 'react';
import styled from 'styled-components';
import {
	color_subtle,
	color_dark,
	FlexFunc,
	mobile,
	tablet,
	PageSection,
	FormSVGContainer,
	FormSVGContainer2,
	ProjectsSVGContainer,
} from '../styles';

const Contact = () => {
	return (
		<ContactContainer>
			<ProjectsSVGContainer />
			<StyledForm
				action="https://formsubmit.co/emilyabrahart@gmail.com"
				method="POST"
			>
				<h2>CONTACT ME</h2>
				<FormSVGContainer />
				<FormSVGContainer2 />
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

const ContactContainer = styled(PageSection)`
	background-color: ${color_subtle};
	color: ${color_dark};
	justify-content: space-between;
`;

const StyledForm = styled.form`
	width: 400px;
	min-height: 100vh;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: 'space-evenly';
	align-items: 'center';
	h2 {
		letter-spacing: 0.5rem;
		z-index: 5000;
		text-align: center;
	}
	@media ${mobile} {
		width: 90%;
	}
`;

const FieldContainer = styled.div`
	width: 100%;
	padding: 1rem 0;
	z-index: 5000;

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
