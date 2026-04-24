import { useState } from 'react'
import { TextInput } from './components/TextInput/TextInput'  
import './App.css'

function App() {
  const [text, setText] = useState("");

  // This function will be passed down to the child, TextInput
  // It knows how to update the parent's state
  const handleTextChangeFromTextInput = (inputtedText: string) => {
    setText(inputtedText);
  };

  return (
    <div>
     <TextInput onTextChange={handleTextChangeFromTextInput} />
    </div>
  )
}

export default App
