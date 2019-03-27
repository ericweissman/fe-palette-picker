import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deleteProjectSuccess, deletePaletteSuccess, setActivePalette, getPalettesSuccess, editProjectSuccess, setPaletteToEdit } from '../../actions';
import { handleProject } from '../../thunks/handleProject'
import { handlePalette } from '../../thunks/handlePalette';
import Palette from '../Palette/Palette'


class ProjectCard extends Component {
  state = {
    edited: false,
    projectName: '',
  }

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

  toggleEdited = () => {
    const { id } = this.props.project
    const { projectName } = this.state
    const url = process.env.REACT_APP_BACKEND_URL + `/api/v1/projects/${id}`
    const project = { project_name: projectName }

    this.setState({ edited: !this.state.edited })
    if (this.state.edited) {
      this.props.handleProject(url, editProjectSuccess, 'PUT', project)
    }
  }
  
  editPalette = (palette) => {
    this.props.setPaletteToEdit(palette)
  }

  updateName = (e) => {
    const { value } = e.target
    this.setState({
      projectName: value
    })
  }

  render() {
    const { project_name, id } = this.props.project
    const palettes = this.props.palettes.filter(palette => palette.project_id === id)
    const palettesToDisplay = palettes.map(palette => {
      return <Palette key={palette.id} palette={palette} setActive={this.setActive} deletePalette={this.deletePalette} editPalette={this.editPalette} editName={this.props.handlePalette} />
    })
    const { edited } = this.state

    return (
      <div className="project-card">
        <div className="project-name">
          {edited ?
            <input onChange={this.updateName} value={this.state.projectName}></input> :
            <h3>{project_name}</h3>
          }
          <button onClick={this.toggleEdited} className={edited ? "save-name-btn" : "edit-name-btn" }></button>
          <button className="delete-name-btn" onClick={this.deleteProject}></button>
        </div>
        <button className="get-palettes-btn" onClick={this.getPalettes} id={id}>Get Palettes</button>
        {palettesToDisplay}
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
  setActivePalette: (palette) => dispatch(setActivePalette(palette)),
  setPaletteToEdit: (palette) => dispatch(setPaletteToEdit(palette))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCard);