import { useState } from 'react'
import { TextInput } from './components/TextInput/TextInput'
import StatsDisplay from './components/StatsDisplay/StatsDisplay';
import type { TextStats } from './types';
import './App.css'

function App() {
  const [text, setText] = useState("");  
  
  
  // This function will be passed down to the child, TextInput
  // It knows how to update the parent's state
  const handleTextChangeFromTextInput = (inputtedText: string) => {
    setText(inputtedText);
  };

  const stats: TextStats = {
    characterCount: text.length,
    wordCount: text.split(" ").length,
    readingTime: 20
  };

  return (
    <div>
      <TextInput onTextChange={handleTextChangeFromTextInput} />

      <StatsDisplay
        stats={stats}
        showReadingTime={true}
      />
    </div>


  )
}

export default App
