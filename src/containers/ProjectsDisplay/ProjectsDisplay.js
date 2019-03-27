import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handlePalette } from '../../thunks/handlePalette';
import ProjectCard from '../ProjectCard/ProjectCard'
import Masonry from 'react-masonry-component'


export class ProjectsDisplay extends Component {

  render() {
    const { projects } = this.props
    const breakpointColumnsObj = {
      default: 4,
      1100: 3,
      700: 2,
      500: 1
    };

    return (
      <Masonry 
      breakpointCols={breakpointColumnsObj}
      className="projects-display-grid"
      columnClassName="projects-display-grid_column"
      >
        {
          projects && projects.map(project => {
            return <ProjectCard key={project.id} project={project} />
          })
        }
      </Masonry>
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