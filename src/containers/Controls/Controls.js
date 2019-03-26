import React, { Component } from 'react'
import AddPalette from '../AddPalette/AddPalette'
import CreateProject from '../CreateProject/CreateProject'
import PropTypes from 'prop-types'

class Controls extends Component {

  render() {
    return (
      <div className="controls">
        <CreateProject />
        <AddPalette />
      </div>
    )
  }
}

export default Controls