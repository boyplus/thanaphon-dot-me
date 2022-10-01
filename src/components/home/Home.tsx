import React from 'react';
import './home.css';

const Home: React.FC = () => {
  return (
    <main className='home'>
      <img src="/images/profile.jpg" width="250px" height="333px" className='profile-pic'></img>
      <div className="content">
        <h1 className='blue'>Thanaphon Sombunkaeo (Boy)</h1>
        <p>"A person who loves problem solving and full-stack development."</p>
        <div className='experiences'>
          <h3>🔥 Experiences (in brief)</h3>
          <ul>
            <li>Sofrware Engineer (full-stack) intern at Agoda (Bangkok)</li>
            <li>Freelance full-stack web developer @ KKP Cargo{'&'}Logistics</li>
            <li>Content creator of GDSC KMUTT (Google Developer Student Club)</li>
          </ul>
        </div>
        <div className='talk'>
          <h3>🎙 Talk to me about</h3>
          <ul>
            <li>Algorithms and full-stack development</li>
            <li>KPOP (boy groups)</li>
            <li>Books</li>
          </ul>
        </div>
      </div>
    </main>
  )
}

export default Home;