import React, { Component } from 'react';
import PropTypes from 'prop-types'


export class Swatch extends Component {
  constructor() {
    super()
    this.state = {
      locked: false,
    }
  }

  toggleLocked = (e) => {
    this.props.handleClick(e)
    this.setState({
      locked: !this.state.locked
    })
  }

  render() {
    const { palette, value } = this.props
    const { locked } = this.state
    return (
      <div style={{ backgroundColor: palette }} className='color-individual'>
        <div className='lock-control'>
          <button onClick={this.toggleLocked} value={value} className={locked ? 'locked' : 'unlocked'}></button>
          <h4>{palette}</h4>
        </div>
      </div>
    )
  }
}

export default Swatch;

Swatch.propTypes = {
  handleClick: PropTypes.func,
  value: PropTypes.string,
}