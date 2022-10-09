import React from 'react';
import ProjectOverviewCard from '@/components/project/ProjectOverviewCard';

import projectsOverview from '@/components/project/project-overview-data';

import './projects.css';

const Projects: React.FC = () => {
  const projectOverviewList = projectsOverview.map(project => {
    return <ProjectOverviewCard key={project.title} {...project} />
  })
  return (
    <main className='projects'>
      <h1 className='blue header big-text'>Projects</h1>
      <div className='project-list-container'>
        {projectOverviewList}
      </div>
    </main>
  )
}

export default Projects;