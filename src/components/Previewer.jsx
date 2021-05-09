import React, {useState} from 'react'
import convertText from '../convertText'
import parse from 'html-react-parser'

function Previewer(props) {
  const [previewSize, setPreviewSize] = useState('small')
  const [previewBtn, setPreviewBtn] = useState(<i className="fas fa-expand-alt"></i>)

  function resizePreview() {
    if(previewSize === 'small') {
      setPreviewSize('large')
      setPreviewBtn(<i className="fas fa-compress-alt"></i>)
    }
    if(previewSize === 'large') {
      setPreviewSize('small')
      setPreviewBtn(<i className="fas fa-expand-alt"></i>)
    }
  }

  const markdownText = convertText(props.value)

  return (
    <div className={'previewer previewer-'+previewSize}>
      <div className='toolbar'>
        <p>Previewer</p>
        <button onClick={resizePreview}>{previewBtn}</button>
      </div>
      <div id='preview' className='previewText'>
        {parse(markdownText)}
      </div>
    </div>
  )
}

export default Previewer;
