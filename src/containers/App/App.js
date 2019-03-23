import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProjects } from '../../thunks/getProjects'
import { addProject } from '../../thunks/addProject'
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
  }

  render() {
    return (
      <div className="App">
        <h1>Palette Picker</h1>
        <form>
          <input onChange={this.handleChange} placeholder='new-project-name' name='projectName' value={this.state.projectName}></input>
          <button onClick={this.handleClick}>Save</button>
        </form>
      </div>
    );
  }
}


export const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  error: state.error
});

export const mapDispatchToProps = (dispatch) => ({
  getProjects: (url) => dispatch(getProjects(url)),
  addProject: (url, project) => dispatch(addProject(url, project))
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