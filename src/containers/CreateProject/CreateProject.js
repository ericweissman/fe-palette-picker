import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleProject } from '../../thunks/handleProject'
import { addProjectSuccess } from '../../actions'

export class CreateProject extends Component {
  state = {
    projectName: '',
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { handleProject } = this.props
    const project = { project_name: this.state.projectName }
    const url = process.env.REACT_APP_BACKEND_URL + '/api/v1/projects'
    handleProject(url, addProjectSuccess, 'POST', project)
  }

  render() {
    return (
      <div className="create-project">
        <h3>New Project</h3>
        <form>
          <input
            onChange={this.handleChange}
            placeholder='new project name'
            name='projectName'
            value={this.state.projectName}>
          </input>
          <button onClick={this.handleSubmit}>
            Save Project
          </button>
        </form>
      </div>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  handleProject: (url, actionToDispatch, method, project) => dispatch(handleProject(url, actionToDispatch, method, project))
})

export default connect(null, mapDispatchToProps)(CreateProject)