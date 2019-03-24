import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setActivePalette } from '../../actions';
import PropTypes from 'prop-types';
import '../../main.scss';

class Generator extends Component {
  constructor() {
    super()
    this.state = {
      locked: [],
      colors: [],
      color1: '',
      color2: '',
      color3: '',
      color4: '',
      color5: '',
      palette: '',
      savedPalette: []
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
      palette,
      color1: palette[0],
      color2: palette[1],
      color3: palette[2],
      color4: palette[3],
      color5: palette[4]
    })
    this.props.setActivePalette(palette)
  }

  //check to see if the value exists in the locked array
  //if it does NOT
  //push the color and value into the locked array
  //if it does exists
  //filter out the colors that do NOT have that value
  //set state of Locked colors with the locked array
  handleClick = (e) => {
    const { value } = e.target
    const { locked, palette } = this.state
    let checked = [...locked]
    console.log(checked)
    checked.forEach(color => {
      if (color.id === parseInt(value)) {
        checked = checked.filter(color => color.id !== parseInt(value))
      } 
        checked.push({ id: value, color: palette[value] })

    })
    this.setState({
      locked: checked,
    })
  }
  // handleClick = (e) => {
  //   const { value } = e.target
  //   const { locked, palette } = this.state
  //   let edited = [...locked]
  //   edited.forEach(color => {
  //     if(color.id === parseInt(value)) {
  //       edited = edited.filter(color => color.id !== parseInt(value))
  //     } else {

  //     }
  //   })
  //   edited.push({ id: parseInt(value), color: palette[value] })
  //   this.setState({
  //     locked: edited,
  //   })
  // }

  checkLocked = (index) => {
    const { locked, palette } = this.state
    if (locked.includes(index)) {
      return this.state.color + index
    } else {
      return palette[index]
    }
  }

  //check to see if the locked array includes the color
  // if it does, display that color
  // if it does NOT, display the pallete[index]  

  // checkLocked = (index) => {
  //   const { locked, palette } = this.state
  //   if (locked.length) {
  //     return locked.map(color => {
  //       if (color.id === index) {
  //         return color.color
  //       } else {
  //         return palette[index]
  //       }
  //     })
  //   } else {
  //     return palette[index]
  //   }
  // }

  savePalette = () => {
    const { color1, color2, color3, color4, color5 } = this.state
    let savedPalette = [color1, color2, color3, color4, color5]
    this.setState({
      savedPalette
    })
  }

  render() {

    return (
      <div className='generator'>
        <h1>Palette Picker</h1>
        <div className='palette-main'>
          <div>
            <div style={{ backgroundColor: this.checkLocked(0) }} className='color-individual'>
            </div>
            <button onClick={this.handleClick} value={0}>Lock</button>
          </div>
          <div>
            <div style={{ backgroundColor: this.checkLocked(1) }} className='color-individual'></div>
            <button onClick={this.handleClick} value={1}>Lock</button>
          </div>
          <div>
            <div style={{ backgroundColor: this.checkLocked(2) }} className='color-individual'></div>
            <button onClick={this.handleClick} value={2}>Lock</button>
          </div>
          <div>
            <div style={{ backgroundColor: this.checkLocked(3) }} className='color-individual'></div>
            <button onClick={this.handleClick} value={3}>Lock</button>
          </div>
          <div>
            <div style={{ backgroundColor: this.checkLocked(4) }} className='color-individual'></div>
            <button onClick={this.handleClick} value={4}>Lock</button>
          </div>
        </div>
        <button onClick={this.generatePalette}>Generate Palette</button>
        <button onClick={this.savePalette}>Save Palette</button>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  activePalette: state.activePalette,
})

export const mapDispatchToProps = (dispatch) => ({
  setActivePalette: (palette) => dispatch(setActivePalette(palette))
})

export default connect(mapStateToProps, mapDispatchToProps)(Generator);