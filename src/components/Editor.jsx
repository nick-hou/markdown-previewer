import React, {useState} from 'react'

function Editor(props) {
  const [editorSize, setEditorSize] = useState('small')
  const [editorBtn, setEditorBtn] = useState(<i className="fas fa-expand-alt"></i>)

  function resizeEditor() {
    if(editorSize === 'small') {
      setEditorSize('large')
      setEditorBtn(<i className="fas fa-compress-alt"></i>)
    }
    if(editorSize === 'large') {
      setEditorSize('small')
      setEditorBtn(<i className="fas fa-expand-alt"></i>)
    }
  }

  return (
    <div className={'editor editor-'+ editorSize}>
      <div className='toolbar'>
        <p>Editor</p>
        <button onClick={resizeEditor}>{editorBtn}</button>
      </div>
      <textarea
        className='editorText'
        onChange={props.onChange}
        value={props.input}
      />
    </div>
  )
}

export default Editor;
