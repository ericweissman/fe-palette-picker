import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class AddPalette extends Component {
  state = {
    paletteName: '',
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const url = process.env.REACT_APP_BACKEND_URL + '/api/v1/projects'
    this.props.addPalette(url, this.state.paletteName)
  }

  render() {
    return (
      <div className="add-palette">
        <h3>New palette</h3>
        <form>
          <input
            onChange={this.handleChange}
            placeholder='new palette name'
            name='projectName'
            value={this.state.paletteName}>
          </input>
          <button onClick={this.handleSubmit}>
            Save to...
          </button>
          <select name="projects">
            <option value="p1">proj 1</option>
            <option value="p2">proj 2</option>
            <option value="p3">proj 3</option>
          </select>
        </form>
      </div>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  // addPalette: (url, projectID) => dispatch(addPalette(url, projectID))
})

export default connect(null, mapDispatchToProps)(AddPalette)