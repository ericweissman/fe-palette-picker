import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setActivePalette } from '../../actions';
import PropTypes from 'prop-types';
import Swatch from '../../components/Swatch/Swatch'
import '../../main.scss';

class Generator extends Component {
  constructor() {
    super()
    this.state = {
      locked: [],
    }
  }

  componentDidMount() {
    if (!this.props.activePalette.length) {
      this.generatePalette()
    }
  }

  createColor = () => {
    const options = '0123456789ABCDEF'
    let hexArray = ['#']
    for (let i = 0; i < 6; i++) {
      let random = Math.floor(Math.random() * (16))
      hexArray.push(options[random])
    }
    return hexArray.join('')
  }

  generatePalette = () => {
    const { locked } = this.state
    const { activePalette } = this.props
    let palette = []
    for (let i = 0; i < 5; i++) {
      let color = ''
      if (locked.includes(i)) {
        color = activePalette[i]
      } else {
        color = this.createColor()
      }
      palette.push(color)
    }
    this.props.setActivePalette(palette)
  }

  handleClick = (e) => {
    const { value } = e.target
    const { locked } = this.state
    let checked = []
    console.log(value)
    if (locked.includes(parseInt(value))) {
      checked = locked.filter(id => id !== parseInt(value))
    } else {
      checked = [...locked, parseInt(value)]
    }
    this.setState({
      locked: checked,
    })
  }

  savePalette = (palette) => {
    //assuming this is where we will POST or PUT a Palette
  }

  render() {
    const { activePalette } = this.props
    return (
      <div className='generator'>
        <h1>Palette Picker</h1>
        <div className='palette-main'>
          {
            activePalette.map((palette, i) => {
              return (
                <Swatch key={i} value={i} palette={palette} handleClick={this.handleClick} />
              )
            })
          }
        </div>
        <div className='generator-btns'>
          <button onClick={this.generatePalette}>Generate Palette</button>
          <button onClick={this.savePalette}>Save Palette</button>
        </div>
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