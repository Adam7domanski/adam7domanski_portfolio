import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyButton from './components/MyButton';
import About from './components/About';
import Projects from './components/Projects';
import Canvas3d from './components/Canvs3d';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>src/App.tsx</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyButton icon="github.svg" name="Google" link="https://www.google.com" />
        <About />
        <hr className='horizontal-devider'/>
        <Projects />
        <hr className='horizontal-devider'/>
        <Canvas3d />
      </header>
    </div>
  );
}

export default App;
