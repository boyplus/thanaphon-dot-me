import React from 'react';
import './home.css';
import contents from './contents';

const Home: React.FC = () => {

  const contentList = contents.map(content => {
    return <div className='content-container' key={content.header}>
      <h2>{content.header}</h2>
      <ul>
        {content.items.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  });

  return (
    <main className='home'>
      <img
        src="/images/profile-3.jpg"
        width="250px"
        height="355px"
        className='profile-pic'
        alt="Profile picture"
      />
      <div className="profile">
        <h1 className='blue align-center'>Thanaphon Sombunkaeo (Boy)</h1>
        <p className='align-center'>"A person who loves problem solving and full-stack development."</p>
        <div className='content-list-container'>
          {contentList}
        </div>
      </div>
    </main>
  )
}

export default Home;