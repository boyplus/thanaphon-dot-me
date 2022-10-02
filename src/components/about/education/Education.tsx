import React from 'react';

export interface IEducation {
  place: string;
  year: string;
  description: string;
  gpax: string;
  transcript: string;
}

const Education: React.FC<IEducation> = ({ place, year, description, gpax, transcript }) => {
  return (
    <div className='education'>
      <h3>{place}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Education;
