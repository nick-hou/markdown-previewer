import './App.css';
import React, { useState } from 'react';
import Editor from './components/Editor'
import Previewer from './components/Previewer'
import defaultInput from './defaultInput'

function App() {
  const [input, setInput] = useState(defaultInput);

  function changeInput(e) {
    setInput(e.target.value);
  }

  return (
    <div className="App">
      <Editor
        input={input}
        onChange={changeInput}
      />
      <Previewer
        value={input}
      />
    </div>
  );
}

export default App;
