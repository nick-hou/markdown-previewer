import './App.css';
import React, { useState } from 'react';
import Editor from './components/Editor'
import Previewer from './components/Previewer'

function App() {
  const [input, setInput] = useState('');

  function changeInput(e) {
    setInput(e.target.value);
  }

  return (
    <div className="App">
      <div className="editorContainer">
        <Editor
          input={input}
          onChange={changeInput}
        />
      </div>
      <div className="previewerContainer">
        <Previewer
          value={input}
        />
      </div>
    </div>
  );
}

export default App;
