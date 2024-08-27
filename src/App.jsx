import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Brady Bud</h1>
        <div className="links">
          <LinkButton text="X - Twitter" url="https://x.com/bradybud_"/>
          <LinkButton text="Instagram" url="https://www.instagram.com/bradybud_/"/>

          <LinkButton text="TikTok" url="https://www.tiktok.com/@bradybud_?_t=8jAWkpyzrgE&_r=1"/>
          <LinkButton text="El mejor contenido 🔞" url="https://www.sheer.com/bradybud"/>

       
        </div>
        <div className="social-media">
          <a href="https://x.com/bradybud_">
            <img src="assets/x.jpg" alt="Twitter" />
          </a>
          <a href="https://www.instagram.com/bradybud_/">
            <img src="assets/instagram.jpg" alt="Instagram" />
          </a>
          <a href="https://www.tiktok.com/@bradybud_?_t=8jAWkpyzrgE&_r=1">
            <img src="assets/tiktok.jpg" alt="Tiktok" />
          </a>
          <a href="https://www.sheer.com/bradybud">
            <img src="assets/sheer.png" alt="Sheer" />
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