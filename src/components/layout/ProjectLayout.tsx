import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import './project-layout.css';

interface BlogLayoutProps {
  children: JSX.Element;
}

const ProjectLayout: React.FC<BlogLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="project-layout-container">
        <div className="back" onClick={() => navigate("/project")}>
          <div style={{ width: "15px" }}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </div>
          <p style={{ marginLeft: "15px", marginTop: "-5px" }}>Back</p>
        </div>
        {children}
      </div>
    </>
  );
};

export default ProjectLayout;
