import React from 'react';
import AboutContent, { IAboutContent } from './AboutContent';

import './about-content-list.css';

interface ExperiencesProps {
  header: string;
  items: IAboutContent[];
}

const AboutContentList: React.FC<ExperiencesProps> = ({ header, items }) => {

  const experienceList = items.map(item => {
    return <li key={item.title}>
      <AboutContent {...item} />
    </li>
  });

  return (
    <div className='about-content-list-container'>
      <h2>{header}</h2>
      <ul className='about-content-list'>
        {experienceList}
      </ul>
    </div>
  );
}

export default AboutContentList;