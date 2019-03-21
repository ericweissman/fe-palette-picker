import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../../main.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
      
      </div>
    );
  }
}
export const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  error: state.error
});

export default connect(mapStateToProps)(App);

App.propTypes = {
  error: PropTypes.string,
  isLoading: PropTypes.bool,
}

App.defaultProps = {
  error: '',
  isLoading: true,
}