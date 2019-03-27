import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handlePalette } from '../../thunks/handlePalette';
import ProjectCard from '../ProjectCard/ProjectCard'
import PropTypes from 'prop-types'

export class ProjectsDisplay extends Component {

  render() {
    const { projects } = this.props
    return (
      <div className="projects-container">
        {
          projects && projects.map(project => {
            return <ProjectCard key={project.id} project={project} />
          })
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
  handlePalette: (url, actionToDispatch, method, palette) => dispatch(handlePalette(url, actionToDispatch, method, palette)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsDisplay);

ProjectsDisplay.propTypes = {
  handlePalette: PropTypes.func,
  projects: PropTypes.array,
  palettes: PropTypes.array,
}