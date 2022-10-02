import React from 'react';
import Education from './Education';
import educations from './educations-data';

import './educations.css';

const Educations: React.FC = () => {

  const educationList = educations.map(education => <Education key={education.place} {...education} />)

  return (
    <div className='educations-container'>
      <h2>📖 Educations</h2>
      <div className='education-list'>
        {educationList}
      </div>
    </div>
  )
}

export default Educations;