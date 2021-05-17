import React from 'react';
import AdDisplay from './components/Ad';
import AdDesigner from './components/AdDesigner';
import Header from './components/Header';
import Vote from './components/Vote';
import Ad from './models/Ad';
import './App.css'



function App() {
  return (
    <div className="App">
      <Header greeting = "Welcome, " user="Katie" />
      <div className="flavorDivs">
      <AdDisplay ad={{flavor:"Vanilla", fontSize:15, darkTheme: true}}/> 
      <AdDisplay ad={{flavor:"Chocolate", fontSize:15, darkTheme: false}}/> 
      <AdDisplay ad={{flavor:"Strawberry", fontSize:15, darkTheme: true}}/> 
      </div>
      <AdDesigner/>
      <Vote />

    </div>
  );
}

export default App;