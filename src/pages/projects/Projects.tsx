import React from 'react';
import Layout from '@/components/layout/Layout';
import ProjectOverviewCard from '@/components/project/ProjectOverviewCard';

import projectsOverview from '@/components/project/project-overview-data';

import './projects.css';

const Projects: React.FC = () => {
  console.log('inside projects')
  const projectOverviewList = projectsOverview.map(project => {
    return <ProjectOverviewCard key={project.title} {...project} />
  })
  return (
    <Layout>
      <div className='projects'>
        <h1 className='blue header big-text'>Projects</h1>
        <div className='project-list-container'>
          {projectOverviewList}
        </div>
      </div>
    </Layout>
  )
}

export default Projects;