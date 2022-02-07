/* Timothy Do 
Portfolio Version 1 */

import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
// ReactRouter ver6 doesn't support switch and component anymore, instead use Routes and element.
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
          <Header />
          <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>} /> 
          <Route path="/about" exact element={<About/>} />
          <Route path="/projects" exact element={<Projects/>} />
          <Route path="/contact" exact element={<Contact/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
