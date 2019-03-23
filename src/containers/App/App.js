import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProjects } from '../../thunks/getProjects'
import { addProject } from '../../thunks/addProject'
import { deleteProject } from '../../thunks/deleteProject'
import { getPalettes } from '../../thunks/getPalettes'
import Generator from '../Generator/Generator'
import PropTypes from 'prop-types';
import '../../main.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projectName: '',
    }
  }

  componentDidMount() {
    const url = process.env.REACT_APP_BACKEND_URL + '/api/v1/projects'
    this.props.getProjects(url)
  }
  
  handleClick = (e) => {
    e.preventDefault();
    const url = process.env.REACT_APP_BACKEND_URL + '/api/v1/projects'
    this.props.addProject(url, this.state.projectName)
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
    console.log(this.props.projects[this.props.projects.length - 1])
  }

  delete = () => {
    const id = this.props.projects[this.props.projects.length - 1].id
    const url = process.env.REACT_APP_BACKEND_URL + `/api/v1/projects/${id}`
    this.props.deleteProject(url, id)
  }

  getPalettes = () => {
    const id = this.props.projects[0].id
    const url = process.env.REACT_APP_BACKEND_URL + `/api/v1/projects/${id}/palettes`
    this.props.getPalettes(url)
  }

  render() {
    return (
      <div className="App">
        <Generator />
        <form>
          <input onChange={this.handleChange} placeholder='new-project-name' name='projectName' value={this.state.projectName}></input>
          <button onClick={this.handleClick}>Save</button>
        </form>
        <div>
          <button onClick={this.delete}>Delete</button>
          <button onClick={this.getPalettes}>Palettes</button>
        </div>
      </div>
    );
  }
}


export const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  error: state.error,
  projects: state.projects,
  palettes: state.palettes,
});

export const mapDispatchToProps = (dispatch) => ({
  getProjects: (url) => dispatch(getProjects(url)),
  addProject: (url, project) => dispatch(addProject(url, project)),
  deleteProject: (url, projectID) => dispatch(deleteProject(url, projectID)),
  getPalettes: (url) => dispatch(getPalettes(url)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  error: PropTypes.string,
  isLoading: PropTypes.bool,
}

App.defaultProps = {
  error: '',
  isLoading: true,
}