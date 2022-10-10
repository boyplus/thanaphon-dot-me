import React from 'react';
import { Link } from 'react-router-dom';

import './project-card.css';

export interface IProjectOverview {
  title: string;
  period: string;
  description: string;
  link: string;
}

const ProjectOverviewCard: React.FC<IProjectOverview> = ({ title, period, description, link }) => {
  return (
    <Link to={`/project/${link}`} className="project-overview-card-container">
      <div className='project-overview-card'>
        <div>
          <h3>{title}</h3>
          <p className='grey'>{period}</p>
          <p style={{ marginTop: '10px' }}>{description}</p>
        </div>
        <p className='align-end blue'>Read more</p>
      </div>
    </Link>

  );
}

export default ProjectOverviewCard;