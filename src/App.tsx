import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Project from './pages/projects/Project';
import Contact from './pages/contact/Contact';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/project" element={<Projects />}>
            <Route path=":projectName" element={<Project />}></Route>
          </Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter >
  )
}

export default App;