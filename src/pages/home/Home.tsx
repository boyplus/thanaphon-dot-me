import React from 'react';
import './home.css';

const contents = [
  {
    header: '🔥 Experiences (in brief)', items: [
      'Sofrware Engineer (full-stack) intern at Agoda (Bangkok)',
      'Freelance full-stack web developer @ KKP Cargo&Logistics',
      'Content creator of GDSC KMUTT (Google Developer Student Club)'
    ]
  },
  {
    header: '🎙 Talk to me about', items: [
      'KPOP (boy groups)',
      'Algorithms',
      'Web development'
    ]
  }
];

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
      <img src="/images/profile.jpg" width="250px" height="333px" className='profile-pic'></img>
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