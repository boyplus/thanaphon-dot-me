import React from 'react';

import Layout from '@/components/layout/Layout';
import Bio from '@/components/about/bio/Bio';
import Educations from '@/components/about/education/Educations';
import AboutContentList from '@/components/about/content/AboutContentList';

import { workExperiences, activityExperiences, awards } from '@/components/about/content/about-content-data';

import './about.css';

const About: React.FC = () => {
  return (
    <Layout>
      <div className='about'>
        <Bio />
        <Educations />
        <AboutContentList header="🔥 Work experiences" items={workExperiences} />
        <AboutContentList header="🧑🏻‍💻 Activities" items={activityExperiences} />
        <AboutContentList header="🎖 Awards" items={awards} />
      </div>
    </Layout>
  )
}

export default About;