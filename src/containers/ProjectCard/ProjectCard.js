import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getPalettes } from '../../thunks/getPalettes'
import { setActivePalette } from '../../actions';
import Palette from '../Palette/Palette'


class ProjectCard extends Component {
  constructor() {
    super();
  }

  setActive = (palette) => {
    console.log(palette)
    this.props.setActivePalette(palette)
  }

  getPalettes = (e) => {
    e.preventDefault()
    const { id } = this.props.project
    const url = process.env.REACT_APP_BACKEND_URL + `/api/v1/projects/${id}/palettes`
    this.props.getPalettes(url, id)
  }

  palettesToDisplay = (id) => {
    const palettes = this.props.palettes.filter(palette => palette.project_id === id)
    return palettes.map(palette => {
      return <Palette palette={palette} setActive={this.setActive} />
    })
  }

  render() {
    const { project_name, id } = this.props.project
    return (
      <div className="project-card">
        <h3>{project_name}</h3>
        <button onClick={this.getPalettes} id={id}>Get Palettes</button>
        {
          this.palettesToDisplay(id)
        }

      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  projects: state.projects,
  palettes: state.palettes,
});

export const mapDispatchToProps = (dispatch) => ({
  getPalettes: (url) => dispatch(getPalettes(url)),
  setActivePalette: (palette) => dispatch(setActivePalette(palette))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCard);