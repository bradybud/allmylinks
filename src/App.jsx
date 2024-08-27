import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Julen Reyes</h1>
        <div className="links">
          <LinkButton text="X - Twitter" url="https://x.com/juulenreyes"/>
          <LinkButton text="Instagram" url="https://www.instagram.com/juulenreyes/"/>

          <LinkButton text="Onlyfans 🔞" url="https://onlyfans.com/juulenreyes"/>
          <LinkButton text="Loverfans 🔞" url="https://loverfans.com/juulenreyes"/>
          <LinkButton text="dirtyFans 🔞" url="https://www.dirtyfans.com/juulenreyes"/>

       
        </div>
        <div className="social-media">
          <a href="https://x.com/juulenreyes">
            <img src="assets/x.jpg" alt="Twitter" />
          </a>
          <a href="https://www.instagram.com/juulenreyes/">
            <img src="assets/instagram.jpg" alt="Instagram" />
          </a>
          <a href="https://onlyfans.com/juulenreyes">
            <img src="assets/only.png" alt="Only" />
          </a>
          <a href="https://loverfans.com/juulenreyes">
            <img src="assets/lover.jpg" alt="Lover" />
          </a>
          <a href="https://www.dirtyfans.com/juulenreyes">
            <img src="assets/dirty.png" alt="Dirty" />
          </a>
        </div>
      </div>
    </div>
  );
}

function LinkButton({ text, url }) {
  return (
    <a href={url} className="link-button" target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  );
}

export default App;