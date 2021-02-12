import React from "react";
import styled from "styled-components";
import Project from "./project";
import ProjectsArray from "../data";
import { FlexFunc, PageSection, SectionHeading } from "../styles";

const Projects = () => {
  const projects = ProjectsArray;

  return (
    <PageSection>
      <SectionHeading>PROJECTS</SectionHeading>
      <ProjectsContentContainer>
        {projects.map((project) => {
          return <Project key={project.id} {...project} />;
        })}
      </ProjectsContentContainer>
    </PageSection>
  );
};

export default Projects;

const ProjectsContentContainer = styled.div`
  ${FlexFunc("row", "center", "center")};
  flex-wrap: wrap;
  width: 100%;
  overflow-x: hidden;
`;
