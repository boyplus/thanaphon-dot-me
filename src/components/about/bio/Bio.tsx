import React from 'react';
import './bio.css';

const Bio: React.FC = () => {
  return (
    <div className='bio'>
      <div className='profile-pic-container'>
        <img
          src="/images/profile-square.jpeg"
          className='profile-pic'
          alt="Profile picture"
          width="220px"
          height="220px"
        />
      </div>

      <div className='short-bio'>
        <h1 className='blue fit-content name'>Thanaphon Sombunkaeo (Boy)</h1>
        <div className='position'>
          <div className='line'></div>
          <h3 className='grey'>Software Engineer</h3>
        </div>
        <p style={{ marginTop: '15px' }}>
          I'm currently working as a software engineer at Agoda. I love problem solving especially in algorithms and data structures. I am also interested in software development.
        </p>
      </div>
    </div>
  );
}

export default Bio;