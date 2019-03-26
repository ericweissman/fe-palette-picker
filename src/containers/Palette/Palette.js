import React, { Component } from 'react';
class Palette extends Component {

  handleEdit = () => {
    const { palette } = this.props
    const colors = [palette.color_1, palette.color_2, palette.color_3, palette.color_4, palette.color_5]
    this.props.setActive(colors)
    this.props.editPalette({ palette_name: palette.palette_name, id: palette.id, project_id: palette.project_id })
  }


  render() {
    const { deletePalette, palette, setActive } = this.props
    const colors = [palette.color_1, palette.color_2, palette.color_3, palette.color_4, palette.color_5]

    return (
      <div className='palette'>
        <h5 onClick={() => setActive(colors)}>{palette.palette_name}</h5>
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
        <button onClick={this.handleEdit}> Edit</button>
      </div>
    )
  }

}

export default Palette;