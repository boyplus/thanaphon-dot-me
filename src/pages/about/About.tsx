import React from 'react';
import './about.css';
import Layout from '@/components/layout/Layout';
import Bio from '@/components/about/bio/Bio';
import Educations from '@/components/about/education/Educations';
import AboutContentList from '@/components/about/content/AboutContentList';

import { workExperiences, activityExperiences } from '@/components/about/content/about-content-data';


const About: React.FC = () => {
  return (
    <Layout>
      <div className='about'>
        <Bio />
        <Educations />
        <AboutContentList header="🔥 Work experiences" items={workExperiences} />
        <AboutContentList header="🧑🏻‍💻 Activities" items={activityExperiences} />
      </div>
    </Layout>
  )
}

export default About;