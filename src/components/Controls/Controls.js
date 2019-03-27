import React, { Component } from 'react'
import AddPalette from '../../containers/AddPalette/AddPalette'
import CreateProject from '../../containers/CreateProject/CreateProject'

export class Controls extends Component {

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