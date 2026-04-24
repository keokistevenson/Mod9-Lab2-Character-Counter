import CharacterCounter from './components/CharacterCounter/CharacterCounter'
import './App.css'

function App() {
return (
  <CharacterCounter 
  minWords = {25}
  maxWords = {202}
  targetReadingTime = {2}
  />
  )
}

export default App
