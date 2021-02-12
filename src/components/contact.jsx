import React from "react";
import styled from "styled-components";
import {
  color_dark,
  color_light,
  mobile,
  PageSection,
  SectionHeading,
} from "../styles";

const Contact = () => {
  return (
    <PageSection>
      <SectionHeading>CONTACT ME</SectionHeading>
      <StyledForm
        name="contactForm"
        action="https://formsubmit.co/emilyabrahart@gmail.com"
        method="POST"
      >
        <FieldContainer>
          <div className="label">NAME</div>
          <input type="text" name="name" required />
        </FieldContainer>
        <FieldContainer>
          <div className="label">EMAIL</div>
          <input type="email" name="email" required />
        </FieldContainer>
        <FieldContainer>
          <div className="label">MESSAGE</div>
          <textarea name="message" required />
        </FieldContainer>
        <FormButton type="submit">Submit</FormButton>
      </StyledForm>
    </PageSection>
  );
};

export default Contact;

const StyledForm = styled.form`
  width: 400px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: "space-evenly";
  align-items: "center";
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
  color: ${color_light};
  border: 2px solid ${color_dark};
  padding: 0.5rem 1rem;
  box-sizing: border-box;

  &:hover {
    cursor: pointer;
    background-color: ${color_light};
    color: ${color_dark};
  }
`;
