import React from 'react';
import Education from './Education';
import educations from './educations-data';

import './educations.css';

const Educations: React.FC = () => {

  const educationList = educations.map(education => <li key={education.place}><Education {...education} /></li>)

  return (
    <div className='educations-container'>
      <h2>📖 Educations</h2>
      <ul className='education-list'>
        {educationList}
      </ul>
    </div>
  )
}

export default Educations;