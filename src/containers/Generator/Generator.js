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
                <div key={i} style={{ backgroundColor: palette }} className='color-individual'>
                  <button onClick={this.handleClick} value={i}>Lock</button>
                  <h4>{palette}</h4>
                </div>
              )
            })
          }
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