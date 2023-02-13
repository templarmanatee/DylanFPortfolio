import React from 'react'; 
import Footer from './components/Footer'; 
import Intro from './components/Intro'; 
import Portfolio from './components/Portfolio';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="App">
      <AboutMe />
      <Intro />
      <Portfolio /> 
      <Footer /> 
    </div>
  )
}

export default App
