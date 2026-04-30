# Reflection Questions

## How did you handle state updates when the text changed?
I used useState in the parent component (CharacterCounter) to store the text. Then I passed a function (handleTextChangeFromTextInput) down to the TextInput component. When the user types, that function gets called and updates the state with the new text.

## What considerations did you make when calculating reading time?
Right now I didn’t fully calculate it. I just hardcoded a value to make sure the UI works. I understand that reading time should probably be based on word count, but I focused first on getting everything connected and displaying correctly.

## How did you ensure the UI remained responsive during rapid text input?
I relied on React’s builtin state updates. Since the text is updated through onChange, React handles re-rendering efficiently. I didn’t add anything special, but it still feels responsive when typing.

## What challenges did you face when implementing the statistics calculations?
The main challenge was calculating the word count correctly. Splitting the text by spaces seemed simple, but I realized it can give incorrect results with empty text or extra spaces. I also wasn’t fully sure how to properly calculate reading time yet. I was tired and just happy i got the main stuff done. I could have looked it up or asked chatGPT but it didn't see much point. I could implement it in the future.