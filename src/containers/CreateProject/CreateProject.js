import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addProject } from '../../thunks/addProject'

class CreateProject extends Component {
  state = {
    projectName: '',
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const url = process.env.REACT_APP_BACKEND_URL + '/api/v1/projects'
    this.props.addProject(url, this.state.projectName)
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
  addProject: (url, project) => dispatch(addProject(url, project))
})

export default connect(null, mapDispatchToProps)(CreateProject)