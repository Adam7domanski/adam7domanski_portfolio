import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyButton from './components/MyButton';

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
        <MyButton name="Google" link="https://www.google.com" />
      </header>
    </div>
  );
}

export default App;
