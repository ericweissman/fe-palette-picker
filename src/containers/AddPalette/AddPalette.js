import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handlePalette } from '../../thunks/handlePalette';
import { addPaletteSuccess } from '../../actions'
import PropTypes from 'prop-types'

export class AddPalette extends Component {
  state = {
    paletteName: '',
    projectID: -1,
    errorMessage: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value, errorMessage: '' })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { projectID, paletteName } = this.state
    const { activePalette } = this.props
    const url = process.env.REACT_APP_BACKEND_URL + `/api/v1/projects/${projectID}/palettes`
    const newPalette = {
      palette_name: paletteName,
      color_1: activePalette[0],
      color_2: activePalette[1],
      color_3: activePalette[2],
      color_4: activePalette[3],
      color_5: activePalette[4],
    }

    let message = '';
    if (projectID === -1) message = 'Please select a project'
    if (paletteName === '') message = 'Please enter a palette name'

    if (message === '') {
      this.props.handlePalette(url, addPaletteSuccess, "POST", newPalette)
    } else {
      this.setState({ errorMessage: message })
    }
  }

  render() {
    const { projects } = this.props
    const projectList = projects.map(project => {
      return <option key={project.id} value={project.id}>{project.project_name}</option>
    })

    return (
      <div className="add-palette">
        <div>
          <h3>New palette</h3>
          <h5>{this.state.errorMessage}</h5>
        </div>
        <form>
          <input
            onChange={this.handleChange}
            placeholder='new palette name'
            name='paletteName'
            value={this.state.paletteName}>
          </input>
          <button onClick={this.handleSubmit}>
            Save to...
          </button>
          <select name="projectID" onChange={this.handleChange}>
            <option hidden> select a project </option>
            {projects && projectList}
          </select>
        </form>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  projects: state.projects,
  activePalette: state.activePalette,
})

export const mapDispatchToProps = (dispatch) => ({
  handlePalette: (url, actionToDispatch, method, palette) => dispatch(handlePalette(url, actionToDispatch, method, palette)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddPalette)