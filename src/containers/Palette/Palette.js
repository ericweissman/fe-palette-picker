import React from 'react';

const Palette = (props) => {
  const { deletePalette, palette, setActive } = props
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
    </div>
  )
}

export default Palette;