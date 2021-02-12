import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faNodeJs,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import photo from "../img/self-photo.jpg";
import {
  FlexFunc,
  color_green,
  color_light,
  mobile,
  tablet,
  PageSection,
  SectionHeading,
} from "../styles";
import { Icon } from "@iconify/react";
import bxlRedux from "@iconify/icons-bx/bxl-redux";
import styledComponents from "@iconify/icons-simple-icons/styled-components";

const About = () => {
  return (

      <AboutContainer>
        <AboutContent>
          <img src={photo} alt="Emily Abrahart" />

          <AboutSection>
            <SectionHeading>ABOUT ME</SectionHeading>
            <p>
              I&apos;m a full stack web developer recently graduated from Lambda
              School and based in London. I have a particular passion for front
              end development working with React as I&apos;m a visual person by
              nature and I enjoy watching my code bring life to the browser,
              however I also have experience on the backend working with Express
              and Node.
            </p>

            <p>
              Having a passion for technology from a young age, prior to Lambda
              I had a career in technology infrastructure and support before
              moving into business analysis predominantly within the finance
              sector during which time I worked closely with global development
              teams to re-build company proprietary applications.
            </p>

            <p>
              During my time at Lambda I was also given the opportunity to work
              as a Section Lead, managing a cohort of staff and approximately 80
              students from across Europe and Africa, helping them to navigate
              their journey into web development.
            </p>

            <p>
              I&apos;m currently seeking my first web developer position whilst
              building on my current skillset learning Typescript and MongoDB.
            </p>
          </AboutSection>
          <AboutSection>
            <SkillsContainer>
              <SkillDiv>
                <FontAwesomeIcon icon={faJs} />
              </SkillDiv>
              <SkillDiv>
                <FontAwesomeIcon icon={faReact} />
              </SkillDiv>
              <SkillDiv>
                <Icon icon={bxlRedux} />
              </SkillDiv>
              <SkillDiv>
                <FontAwesomeIcon icon={faNodeJs} />
              </SkillDiv>
              <SkillDiv>
                <FontAwesomeIcon icon={faPython} />
              </SkillDiv>
              <SkillDiv>
                <Icon icon={styledComponents} />
              </SkillDiv>
            </SkillsContainer>
          </AboutSection>
        </AboutContent>
      </AboutContainer>
  );
};

export default About;

const AboutContainer = styled(PageSection)``;

const AboutContent = styled.div`
  ${FlexFunc("column", "center", "center")};
  width: 100%;
  max-width: 1024px;
  padding: 2rem 0 3rem 0;
  line-height: 1.5rem;

  img {
    width: 100px;
    border-radius: 50%;
    border: 2px solid ${color_light};
    @media only screen and (max-device-height: 800px) {
    }
  }

  p {
    font-size: 0.9rem;
  }
`;

const AboutSection = styled.section`
  text-align: center;
  padding: 1rem 0;
  @media ${tablet} {
    padding: 1rem 2rem 0 2rem;
  }
  @media ${mobile} {
    padding: 1rem 1rem 0 1rem;
  }
`;

const SkillsContainer = styled.div`
  ${FlexFunc("row", "center", "center")}
  flex-wrap: wrap;
`;
const SkillDiv = styled.div`
  font-size: 3rem;
  padding: 1rem;
  color: ${color_green};
`;
