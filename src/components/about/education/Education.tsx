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
      <div style={{ height: '10px' }}></div>
      <p>{description}</p>
      <p className='grey'>{year}</p>
      <p>GPAX: {gpax}</p>
    </div>
  );
};

export default Education;
