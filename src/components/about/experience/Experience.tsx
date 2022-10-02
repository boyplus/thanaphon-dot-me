import React from 'react';

export interface IExperience {
  title: string;
  period: string;
  description: string;
}

const Experience: React.FC = () => {
  return (
    <div className='experience'></div>
  );
}

export default Experience;