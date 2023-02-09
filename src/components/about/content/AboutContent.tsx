import React from 'react';

import './about-content-list.css';

export interface IAboutContent {
  title: string;
  period: string;
  description: string;
  bullets?: string[];
  skills?: string[];
}

const AboutContent: React.FC<IAboutContent> = ({ title, period, description, bullets, skills }) => {
  const renderBullets = () => {
    return bullets?.map((bullet) => <li key={bullet} style={{ marginBottom: '8px' }}>{bullet}</li>);
  }

  const renderSkills = () => {
    return skills?.map((skill) => <div className='skill-card' key={skill}>{skill}</div>);
  }

  return (
    <>
      <h3>{title}</h3>
      <p className='grey'>{period}</p>
      <div style={{ height: '5px' }}></div>
      <p>{description}</p>
      <ul className='bullets'>
        {renderBullets()}
      </ul>

      <div className='skills-container'>
        {renderSkills()}
      </div>
    </>
  );
}

export default AboutContent;