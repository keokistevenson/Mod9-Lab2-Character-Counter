import { useState } from 'react'
import { TextInput } from '../TextInput/TextInput'
import StatsDisplay from '../StatsDisplay/StatsDisplay';
import type { TextStats, CharacterCounterProps } from '../../types';


function CharacterCounter({ minWords, maxWords, targetReadingTime }: CharacterCounterProps) {
    const [text, setText] = useState("");


    // This function will be passed down to the child, TextInput
    // It knows how to update the parent's state
    const handleTextChangeFromTextInput = (inputtedText: string) => {
        setText(inputtedText);
    };

    const stats: TextStats = {
        characterCount: text.length,
        wordCount: text.trim().split(" ").length,
        readingTime: 20
    };

    let summary: string = "";
    if (minWords) {
        summary = "Min: " + minWords;
    } 
    
    if (summary && maxWords) {
        summary += " | Max: " + maxWords;
    } else if (maxWords) {
        summary = "Max: " + maxWords;
    } 
    
    if (summary && targetReadingTime) {
        summary += " | Time: " + targetReadingTime;
    } else if (targetReadingTime) {
        summary = "Time: " + targetReadingTime;
    }

    return (
        <div>
            <TextInput onTextChange={handleTextChangeFromTextInput} />

            <StatsDisplay
                stats={stats}
                showReadingTime={true}
            />

            <div>{summary}</div>
        </div>


    )
}

export default CharacterCounter
