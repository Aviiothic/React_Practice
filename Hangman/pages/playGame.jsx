import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useState } from "react";
import MaskedText from "../components/maskedText/maskedtext";
import LetterButtons from "../components/letterButtons/letterButtons";
import Hangman from "../components/hangman/hangman";

function PlayGame() {
  //--------------------------------------------
  //const [searchParams] = useSearchParams();
  //useSearchparams hook gives us an array
  //destructuring searchParams from params array
  //but this method does not suits us becuase other player would get ans from url
  // const word = searchParams.get('word');
  // console.log(word);
  //---------------------------------------------------------------------------------

  //const {word}=useParams();
  //it is a hook provided by react-router-dom
  //this method is also not feasible for the same reasons

  //we can access state property here using useLocation hook

  const { state } = useLocation();

  const [step, setStep] = useState(0);
  const [guessedLetters, setGuessedLetters] = useState([]);
  //state variable
  //hame hamesha state variable me ek brand new item (variable/array) dalni hoti hai
  //purane array me hi element push na kro, naya array bnao

  function handleLetterClick(letter) {
    if (state.word.toUpperCase().includes(letter)) {
      console.log("correct");
    } else {
      console.log("wrong");
      setStep(step + 1);
    }
    setGuessedLetters([...guessedLetters, letter]);
    //array destructure kiya aur usme letter add kr diya
  }

  //const arr=['hello', 'world', 'Anupam']; ->learning

  return (
    <>
      <h1>Play Game </h1>

      {/*{arr.map((item, index)=><p key={index}>{item}</p>)} ->learning */}
      {/* here we are rendering each element of the array one by one, the map function 
            takes each element one by one and returns a paragraph element for each index*/}
      {/* above function is same as 
                    arr.map(function(item, index) {
                        return <p key={index}>{item}</p>;
                    });
            */}
    {/*below we are using short circuiting, if first input is true then it return second part */}  
      {state?.word && (
        <>
          <MaskedText text={state.word} guessedLetters={guessedLetters} />

          <div>
            <LetterButtons
              text={state.word}
              guessedLetters={guessedLetters}
              onLetterClick={handleLetterClick}
            />
          </div>

          <div>
            <Hangman step={step} />
          </div>
        </>
      )}

      <Link to="/start" className="text-white bg-blue-700">
        {" "}
        Start Game
      </Link>
      {/* Link is an replacement for the anchor tag */}
    </>
  );
}
export default PlayGame;

//react renders each element of an array as individual strings, whatsoever you give in array
//it would be rendered as string by react

// map gets three params for each callback function in the following order
//function callback(currentElement, index, array) {
// your logic here
//}
