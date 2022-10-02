import React from 'react';
import Experience from './Experience';
import experiences from './experiences-data';

import './experiences.css';

const Experiences: React.FC = () => {

  const experienceList = experiences.map(experience => {
    return <li key={experience.title}>
      <Experience {...experience} />
    </li>
  });

  return (
    <div className='experiences-container'>
      <h2>🔥 Experiences</h2>
      <ul className='experience-list'>
        {experienceList}
      </ul>
    </div>
  );
}

export default Experiences;