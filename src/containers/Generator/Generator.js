import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../../main.scss';

class Generator extends Component {
  constructor() {
    super()
    this.state = {
      locked: [],
      color1: '',
      color2: '',
      color3: '',
      color4: '',
      color5: '',
      palette: '',
    }
  }

  createColor = () => {
    const options = '0123456789abcdef'
    let hexArray = ['#']
    for (let i = 0; i < 6; i++) {
      let random = Math.floor(Math.random() * (16))
      hexArray.push(options[random])
    }
    return hexArray.join('')
  }

  generatePalette = () => {
    let palette = []
    for (let i = 0; i < 5; i++) {
      palette.push(this.createColor())
    }
    this.setState({
      palette
    })
  }



  render() {

    return (
      <div className='generator'>
        <h1>Palette Picker</h1>
        <div className='palette-main'>
        <div>
            <div style={{ backgroundColor: this.state.palette[0]}} className='color-individual'></div>
          <button>Lock</button>
        </div>
        <div>
            <div style={{ backgroundColor: this.state.palette[1] }} className='color-individual'></div>
          <button>Lock</button>
        </div>
        <div>
            <div style={{ backgroundColor: this.state.palette[2] }} className='color-individual'></div>
          <button>Lock</button>
        </div>
        <div>
            <div style={{ backgroundColor: this.state.palette[3] }} className='color-individual'></div>
          <button>Lock</button>
        </div>
        <div>
            <div style={{ backgroundColor: this.state.palette[4] }}  className='color-individual'></div>
          <button>Lock</button>
        </div>
        </div>
        <button onClick={this.generatePalette}>Generate Palette</button>
      </div>
    )
  }
}

export default Generator;