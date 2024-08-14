import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{fontFamily: 'inherit'}}>Amber Ahmad</h1>
        <h2 style={{fontFamily: 'inherit'}}> Journalist/Producer</h2>
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
        <div style={{margin:'8px', backgroundColor: 'white', borderRadius: '4px', background: '#6a7c96', padding:'16px'}}>
          <p style={{fontSize: '20px', color: 'white', lineHeight:'28px'}}>
          I'm a journalist and producer specialising in TV broadcast, video documentary and social media production. 
          I'm also a creative copywriter and digital journalist with expeirence writing web journalism and brand storytelling. 
          My work has featured in broadcast outlets including ITV News, Euronews, Channel 5, cultural magazine titles and household brands.
          </p>
          
          <p style={{fontSize: '20px', color: 'white', lineHeight:'28px'}}>
            </p>
        </div>
        <div style={{backgroundColor: 'white', borderRadius: '4px', background: '#6a7c96', padding:'16px'}}>
          <p style={{fontSize: '20px', color: 'white', lineHeight:'28px'}}>
          For freelance enquiries contact: <a style={{color: 'inherit'}} href="mailto:ambereveahmad@gmail.com">ambereveahmad@gmail.com</a> / <a style={{color: 'inherit'}} href="tel:+44 7858618261">+44 7858618261</a>
          </p>
          
          <p style={{fontSize: '20px', color: 'white', lineHeight:'28px'}}>
            </p>
        </div>
      </main>
    </div>
  );
}

export default App;
