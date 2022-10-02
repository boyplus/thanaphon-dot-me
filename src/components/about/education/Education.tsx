import React from 'react';

export interface IEducation {
  place: string;
  period: string;
  description: string;
  gpax: string;
  transcript: string;
}

const Education: React.FC<IEducation> = ({ place, period, description, gpax, transcript }) => {
  return (
    <div className='education'>
      <h3>{place}</h3>
      <p className='grey'>{period}</p>
      <div style={{ height: '10px' }}></div>

      <p>{description}</p>
      <p>GPAX: {gpax} {' '}
        <a href={transcript} target="_blank" className='blue' >
          (See transcript)
        </a>
      </p>
    </div>
  );
};

export default Education;
