import { useState } from 'react';
import viteLogo from './assets/esso.mp4';
import './App.css'

function App() {
  return (
    <div className="App">
      <video
        src={viteLogo}
        controls
        autoPlay
      />
      <div className="card">
        <h1>
          Portfolio in progress...
        </h1>
      </div>
    </div>
  )
}

export default App
