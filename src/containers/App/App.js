import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleProject } from '../../thunks/handleProject'
import Controls from '../../components/Controls/Controls'
import Generator from '../Generator/Generator'
import Loading from '../../components/Loading/Loading'
import ProjectsDisplay from '../../containers/ProjectsDisplay/ProjectsDisplay'
import PropTypes from 'prop-types'
import '../../main.scss'
import { getProjectsSuccess } from '../../actions'

export class App extends Component {

  componentDidMount() {
    const url = process.env.REACT_APP_BACKEND_URL + '/api/v1/projects'
    this.props.handleProject(url, getProjectsSuccess, 'GET')
  }

  render() {
    const { isLoading } = this.props
    if (isLoading) {
      return <Loading />
    } else {
      return (
        <div className="App">
          <Generator />
          <Controls />
          <ProjectsDisplay />
        </div>
      );
    }
  }
}


export const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  error: state.error,
});

export const mapDispatchToProps = (dispatch) => ({
  handleProject: (url, project, actionToDispatch, method) => dispatch(handleProject(url, project, actionToDispatch, method))
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