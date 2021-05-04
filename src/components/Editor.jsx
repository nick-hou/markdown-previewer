import React from 'react'

function Editor(props) {
  return (
    <div className='editor'>
      <div className='toolbar'>
      </div>
      <textarea
        className='editorBox'
        onChange={props.onChange}
      >
        {props.input}
      </textarea>
    </div>
  )
}

export default Editor;
