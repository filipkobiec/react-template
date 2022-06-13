import React from 'react';
import logo from './logo.svg';
import './App.css';

function getApiData(): void {
  fetch('http://react-template.j.pl/api/wp-json/wp/v2/products')
    .then((response) => response.json())
    .then((data) => console.log(data))
}

function App() {
  getApiData();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
