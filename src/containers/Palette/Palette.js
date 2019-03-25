import React from 'react';

const Palette = (props) => {
  const { palette, setActive } = props
  const colors = [palette.color_1, palette.color_2, palette.color_3, palette.color_4, palette.color_5]
  return (
    <div className='palette'>
      <h5>{palette.palette_name}</h5>
      <div className='palette-small'>
        {
          colors.map(color => {
            return (
              <div onClick={() => setActive(colors)} className='small-color' style={{ backgroundColor: color }}> {color} </div>
            )
          })
        }
      </div >
      <button>X</button>
    </div>
  )
}

export default Palette;