import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleProject } from '../../thunks/handleProject'
import { handlePalette } from '../../thunks/handlePalette'
import AddPalette from '../AddPalette/AddPalette'
import CreateProject from '../CreateProject/CreateProject'
import { deleteProjectSuccess } from '../../actions'
import { getPalettesSuccess } from '../../actions'
import PropTypes from 'prop-types'

class Controls extends Component {

  delete = () => {
    const id = this.props.projects[this.props.projects.length - 1].id
    const project = { id }
    const url = process.env.REACT_APP_BACKEND_URL + `/api/v1/projects/${id}`
    this.props.handleProject(url, deleteProjectSuccess, 'DELETE', project)
  }

  getPalettes = () => {
    const id = this.props.projects[0].id
    const url = process.env.REACT_APP_BACKEND_URL + `/api/v1/projects/${id}/palettes`
    this.props.handlePalette(url, getPalettesSuccess, "GET")
  }

  render() {
    return (
      <div>
        <div className="controls">
          <CreateProject />
          <AddPalette />
        </div>
        
        <div>
          <h3>these are temporary</h3>
          <button onClick={this.delete}>Delete</button>
          <button onClick={this.getPalettes}>Palettes</button>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  projects: state.projects,
  palettes: state.palettes,
});

export const mapDispatchToProps = (dispatch) => ({
  handleProject: (url, actionToDispatch, method, project) => dispatch(handleProject(url, actionToDispatch, method, project)),
  handlePalette: (url, actionToDispatch, method, palette) => dispatch(handlePalette(url, actionToDispatch, method, palette))
})

export default connect(mapStateToProps, mapDispatchToProps)(Controls)