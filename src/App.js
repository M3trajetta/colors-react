import React from 'react';
import './App.css';
import seedColor from './seedColors.js';
import { generatePalette } from './colorHelper';
import Palette from './palette/palette.component';

function App() {
  return (
    <div className="App">
      <Palette palette={generatePalette(seedColor[4])} />
    </div>
  );
}

export default App;
