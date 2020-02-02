import React, { Component } from 'react';
import ColorBox from '../color-box/color-box.component';
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
import './palette.styles.css';

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500 };
  }
  render() {
    const { level } = this.state;
    const colorBoxes = this.props.palette.colors[300].map(color => (
      <ColorBox background={color.hex} name={color.name} />
    ));
    return (
      <div className="Palette">
        {/* Navbar goes here */}
        <Slider />
        <div className="Palette-colors">{colorBoxes}</div>
        {/* footer eventually */}
      </div>
    );
  }
}
export default Palette;
