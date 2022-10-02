import React from 'react';

export interface IExperience {
  title: string;
  period: string;
  description: string;
}

const Experience: React.FC<IExperience> = ({ title, period, description }) => {
  return (
    <div className='experience'>
      <h3>{title}</h3>
      <p className='grey'>{period}</p>
      <div style={{ height: '5px' }}></div>
      <p>{description}</p>
    </div>
  );
}

export default Experience;