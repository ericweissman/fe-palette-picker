import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteProject } from '../../thunks/deleteProject'
import { getPalettes } from '../../thunks/getPalettes'
import CreateProject from '../CreateProject/CreateProject'
import PropTypes from 'prop-types'

class Controls extends Component {

  delete = () => {
    const id = this.props.projects[this.props.projects.length - 1].id
    const url = process.env.REACT_APP_BACKEND_URL + `/api/v1/projects/${id}`
    this.props.deleteProject(url, id)
  }

  getPalettes = () => {
    const id = this.props.projects[0].id
    const url = process.env.REACT_APP_BACKEND_URL + `/api/v1/projects/${id}/palettes`
    this.props.getPalettes(url)
  }

  render() {
    return (
      <div className="controls">
        <CreateProject />
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
  deleteProject: (url, projectID) => dispatch(deleteProject(url, projectID)),
  getPalettes: (url) => dispatch(getPalettes(url)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Controls)