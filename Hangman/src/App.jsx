import './App.css'
import TextInputFormContainer from '../components/textInputForm/TextInputFormContainer'
import { Routes, Route } from 'react-router-dom'
import StartGame from '../pages/startGame.jsx'
import PlayGame from '../pages/playGame.jsx'
import Home from '../pages/home.jsx'

//ek baat ka dhyan rkhe ki components ka name hamesha capital se start ho
/* In your file system, even though filenames can be lowercase like startGame.jsx, 
the imported variable name should be capitalized to match React component naming convention.*/

function App() {
  return (
    <Routes>
      <Route path="/" element={<TextInputFormContainer />} />
      <Route path="/start" element={<StartGame />} />
      <Route path="/play" element={<PlayGame />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
