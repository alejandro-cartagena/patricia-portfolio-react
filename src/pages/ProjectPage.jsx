import React from "react";
import { useParams } from "react-router-dom";
import projects from "../projectsData";

function ProjectPage() {
  const { projectId } = useParams();

  return (
    <div className="project-page container">
      <div className="project-video-title-container">
        <div>
          <h1 className="project-name">{projects[projectId].name}</h1>
        </div>
        <video width={500} height={350} controls>
          <source src={projects[projectId].videoUrl} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default ProjectPage;
