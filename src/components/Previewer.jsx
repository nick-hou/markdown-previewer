import React from 'react'

function Previewer(props) {
  return (
    <div className='previewer'>
      <div className='toolbar'>
      </div>
      {props.value}
    </div>
  )
}

export default Previewer;
