import React from 'react';
import Education from './Education';
import educations from './educations-data';

const Educations: React.FC = () => {

  const educationList = educations.map(education => <Education {...education} />)

  return (
    <div className='educations'>
      {educationList}
    </div>
  )
}

export default Educations;