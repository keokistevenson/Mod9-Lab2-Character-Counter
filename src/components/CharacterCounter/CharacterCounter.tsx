import { useState } from 'react'
import { TextInput } from '../TextInput/TextInput'
import StatsDisplay from  '../StatsDisplay/StatsDisplay';
import type { TextStats, CharacterCounterProps } from '../../types';


function CharacterCounter() {
  const [text, setText] = useState("");  
  
  
  // This function will be passed down to the child, TextInput
  // It knows how to update the parent's state
  const handleTextChangeFromTextInput = (inputtedText: string) => {
    setText(inputtedText);
  };

  const stats: TextStats = {
    characterCount: text.length,
    wordCount: text.split(" ").length - 1,
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

export default CharacterCounter
