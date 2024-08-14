import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Amber Ahmad</h1>
      </header>
      <main className="App-main">
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/PLginDVA1C4"
            title="Show-reel"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </div>
  );
}

export default App;
