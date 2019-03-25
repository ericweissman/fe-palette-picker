import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPalettes } from '../../thunks/getPalettes'
import ProjectCard from '../ProjectCard/ProjectCard'

class ProjectsDisplay extends Component {

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
  getPalettes: (url) => dispatch(getPalettes(url)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsDisplay);