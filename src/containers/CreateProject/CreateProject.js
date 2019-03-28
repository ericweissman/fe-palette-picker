import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleProject } from '../../thunks/handleProject'
import { addProjectSuccess } from '../../actions'
import PropTypes from 'prop-types'

export class CreateProject extends Component {
  state = {
    projectName: '',
    message: '',
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value, message: '' })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { projects, handleProject } = this.props
    const { projectName } = this.state
    const project = { project_name: projectName }
    const url = process.env.REACT_APP_BACKEND_URL + '/api/v1/projects'

    const checked = projects.filter(project => project.project_name === projectName)
    if (!checked.length) {
      handleProject(url, addProjectSuccess, 'POST', project)
    } else {
      this.setState({message: 'Please enter a different name'})
    }
  }

  render() {
    return (
      <div className="create-project">
        <h3>Create a New Project</h3>
        <form>
          <input
            autoComplete="off"
            onChange={this.handleChange}
            placeholder='project name'
            name='projectName'
            value={this.state.projectName}>
          </input>
          <button onClick={this.handleSubmit}>
            Save Project
          </button>
          {<h5>{this.state.message}</h5>}
        </form>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  projects: state.projects,
});

export const mapDispatchToProps = (dispatch) => ({
  handleProject: (url, actionToDispatch, method, project) => dispatch(handleProject(url, actionToDispatch, method, project))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)

CreateProject.propTypes = {
  handleProject: PropTypes.func,
  projects: PropTypes.array,
}