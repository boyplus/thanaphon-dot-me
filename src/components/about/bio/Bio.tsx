import React from 'react';
import './bio.css';

const Bio: React.FC = () => {
  return (
    <div className='bio'>
      <img
        src="/images/profile-square-2.jpeg"
        width="200px"
        height="202px"
        className='profile-pic'
        alt="Profile picture"
      />
      <div className='short-bio'>
        <h1 className='blue'>Thanaphon Sombunkaeo (Boy)</h1>
        <div className='position'>
          <div className='line'></div>
          <h3 className='grey'>Full-stack software developer</h3>
        </div>
        <p style={{ marginTop: '15px' }}>
          I'm a senior computer science student at SIT KMUTT (Thailand). I love problem solving especially in algorithms and data structures. I am also interested in full-stack development.
        </p>
      </div>
    </div>
  );
}

export default Bio;