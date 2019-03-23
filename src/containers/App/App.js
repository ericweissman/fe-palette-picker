import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProjects } from '../../thunks/getProjects'
import PropTypes from 'prop-types';
import '../../main.scss';

class App extends Component {

  componentDidMount() {
    const url = process.env.REACT_APP_BACKEND_URL + '/api/v1/projects'
    this.props.getProjects(url)
  }
  

  render() {
    return (
      <div className="App">
        <h1>Palette Picker</h1>
      </div>
    );
  }
}


export const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  error: state.error
});

export const mapDispatchToProps = (dispatch) => ({
  getProjects: (url) => dispatch(getProjects(url))
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