import React from 'react';
import './home.css';

const Home: React.FC = () => {
  return (
    <main className='home'>
      <img src="/images/profile.jpg" width="250px" height="333px"></img>
      <div className="content">
        <h1>Thanaphon Sombunkaeo</h1>
      </div>

    </main>
  )
}

export default Home;