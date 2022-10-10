import React from 'react';

import { useParams } from 'react-router-dom';

const Project: React.FC = () => {
  const { projectId } = useParams();
  return <div>Project</div>
}

export default Project;