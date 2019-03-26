import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deleteProjectSuccess, deletePaletteSuccess, setActivePalette, getPalettesSuccess } from '../../actions';
import { handleProject } from '../../thunks/handleProject'
import { handlePalette } from '../../thunks/handlePalette';
import Palette from '../Palette/Palette'


class ProjectCard extends Component {
  setActive = (palette) => {
    this.props.setActivePalette(palette)
  }

  deleteProject = () => {
    const { id } = this.props.project
    const project = { id }
    const url = process.env.REACT_APP_BACKEND_URL + `/api/v1/projects/${id}`
    this.props.handleProject(url, deleteProjectSuccess, 'DELETE', project)
  }

  deletePalette = (pID) => {
    const projID = this.props.project.id
    const palette = { pID }
    const url = process.env.REACT_APP_BACKEND_URL + `/api/v1/projects/${projID}/palettes/${pID}`
    this.props.handlePalette(url, deletePaletteSuccess, 'DELETE', palette)
  }

  getPalettes = () => {
    const { id } = this.props.project
    const url = process.env.REACT_APP_BACKEND_URL + `/api/v1/projects/${id}/palettes`
    this.props.handlePalette(url, getPalettesSuccess, "GET")
  }

  palettesToDisplay = (id) => {
    const palettes = this.props.palettes.filter(palette => palette.project_id === id)
    return palettes.map(palette => {
      return <Palette palette={palette} setActive={this.setActive} deletePalette={this.deletePalette} />
    })
  }

  render() {
    const { project_name, id } = this.props.project
    return (
      <div className="project-card">
        <button onClick={this.deleteProject}>Delete</button>
        <h3>{project_name}</h3>
        <button onClick={this.getPalettes} id={id}>Get Palettes</button>
        {this.palettesToDisplay(id)}
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
  handlePalette: (url, actionToDispatch, method, palette) => dispatch(handlePalette(url, actionToDispatch, method, palette)),
  setActivePalette: (palette) => dispatch(setActivePalette(palette))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCard);