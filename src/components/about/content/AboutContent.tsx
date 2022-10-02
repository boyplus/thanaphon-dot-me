import React from 'react';

import './about-content-list.css';

export interface IAboutContent {
  title: string;
  period: string;
  description: string;
}

const AboutContent: React.FC<IAboutContent> = ({ title, period, description }) => {
  return (
    <div className='about-content'>
      <h3>{title}</h3>
      <p className='grey'>{period}</p>
      <div style={{ height: '5px' }}></div>
      <p>{description}</p>
    </div>
  );
}

export default AboutContent;