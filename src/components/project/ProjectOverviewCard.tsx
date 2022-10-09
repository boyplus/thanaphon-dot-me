import React from 'react';

import './project-card.css';

export interface IProjectOverview {
  title: string;
  period: string;
  description: string;
  link: string;
}

const ProjectOverviewCard: React.FC<IProjectOverview> = ({ title, period, description, link }) => {
  return (
    <div className='project-overview-card'>
      <h3>{title}</h3>
      <p className='grey'>{period}</p>
      <p style={{ marginTop: '10px' }}>{description}</p>
    </div>
  );
}

export default ProjectOverviewCard;