import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editPaletteSuccess } from '../../actions';
import { handlePalette } from '../../thunks/handlePalette';
import PropTypes from 'prop-types'

export class Palette extends Component {
  state = {
    edited: false,
    name: '',
  }

  editColors = () => {
    const { palette } = this.props
    const colors = [palette.color_1, palette.color_2, palette.color_3, palette.color_4, palette.color_5]
    this.props.setActive(colors)
    this.props.editPalette({ palette_name: palette.palette_name, id: palette.id, project_id: palette.project_id })
  }

  toggleEdited = () => {
    const { name } = this.state
    const { id, project_id, color_1, color_2, color_3, color_4, color_5 } = this.props.palette
    const url = process.env.REACT_APP_BACKEND_URL + `/api/v1/projects/${project_id}/palettes/${id}`
    const palette = {
      palette_name: name,
      color_1,
      color_2,
      color_3,
      color_4,
      color_5,
    }
    this.setState({ edited: !this.state.edited })
    if (this.state.edited) {
      this.props.handlePalette(url, editPaletteSuccess, 'PUT', palette)
    }
  }

  updateName = (e) => {
    const { value } = e.target
    this.setState({
      name: value
    })
  }


  render() {
    const { deletePalette, palette, setActive } = this.props
    const colors = [palette.color_1, palette.color_2, palette.color_3, palette.color_4, palette.color_5]
    const { edited } = this.state
    return (
      <div className='palette'>
        {
          edited ?
            <input onChange={this.updateName} value={this.state.name}></input> :
            <h5 className='palette-name' onClick={() => setActive(colors)}>{palette.palette_name}</h5>
        }
        <button onClick={this.toggleEdited}>{edited ? 'Save' : 'Edit'}</button>
        <div className='palette-small'>
          {
            colors.map((color, i) => {
              return (
                <div key={i} onClick={() => setActive(colors)} className='small-color' style={{ backgroundColor: color }}> {color} </div>
              )
            })
          }
        </div >
        <button onClick={() => deletePalette(palette.id)}>X</button>
        <button onClick={this.editColors}> Edit</button>
      </div>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  handlePalette: (url, actionToDispatch, method, palette) => dispatch(handlePalette(url, actionToDispatch, method, palette)),
})

export default connect(null, mapDispatchToProps)(Palette);

Palette.propTypes = {
  palette: PropTypes.object,
  setActive: PropTypes.func,
  deletePalette: PropTypes.func,
  editPalette: PropTypes.func,
  editName: PropTypes.func,
}