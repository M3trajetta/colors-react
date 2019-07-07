import React from 'react';
import './App.css';
import seedColor from './seedColors.js';
import Palette from './palette/palette.component';

function App() {
  return (
    <div className="App">
      <Palette {...seedColor[4]} />
    </div>
  );
}

export default App;
