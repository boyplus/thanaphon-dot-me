import React from 'react';
import './about.css';
import Layout from '@/components/layout/Layout';
import Bio from '@/components/about/Bio';

const About: React.FC = () => {
  return (
    <Layout>
      <div className='about'>
        <Bio />
        <div>
          <h2>Educations</h2>
        </div>
      </div>
    </Layout>
  )
}

export default About;