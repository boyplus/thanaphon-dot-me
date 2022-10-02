import React from 'react';
import './about.css';
import Layout from '@/components/layout/Layout';
import Bio from '@/components/about/bio/Bio';
import Educations from '@/components/about/education/Educations';

const About: React.FC = () => {
  return (
    <Layout>
      <div className='about'>
        <Bio />
        <Educations />
      </div>
    </Layout>
  )
}

export default About;