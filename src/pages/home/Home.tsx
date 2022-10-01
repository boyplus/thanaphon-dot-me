import React from 'react';
import './home.css';
import contents from './contents';

const Home: React.FC = () => {

  const contentList = contents.map(content => {
    return <div className='content-container'>
      <h3>{content.header}</h3>
      <ul>
        {content.items.map(item => <li>{item}</li>)}
      </ul>
    </div>
  });

  return (
    <main className='home'>
      <img
        src="/images/profile-2.jpeg"
        width="250px"
        height="358px"
        className='profile-pic'
        alt="Profile picture"
      />
      <div className="profile">
        <h1 className='blue'>Thanaphon Sombunkaeo (Boy)</h1>
        <p>"A person who loves problem solving and full-stack development."</p>
        <div className='content-list-container'>
          {contentList}
        </div>
      </div>
    </main>
  )
}

export default Home;