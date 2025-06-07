const ALPHABETS = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
//ek arrat me sare alphabets ko comma seperated values ke sath store kr liye

function LetterButtons({text, guessedLetters, onLetterClick}) {
  const origianlLetters = new Set(text.toUpperCase().split(""));
  const guessedLettersSet = new Set(guessedLetters);

  const buttonStyle = function (letter) {
    if (guessedLettersSet.has(letter)) {
      return `${origianlLetters.has(letter) ? "bg-green-500" : "bg-red-500"}`;
    } else {
      return "bg-blue-500";
    }
  };

  function handleLetterClick(event){
    const characterOfTheLetter = event.target.value;
    onLetterClick?.(characterOfTheLetter);
    //?. is optional chaining operator, ye short circuit kr dega agar function ya object undefinded ho
    //can read more about it on web
  }

  const buttons = ALPHABETS.map((letter) => {
  return (
    <button
      key={letter} // ✅ Add this line
      value={letter}
      onClick={handleLetterClick}
      disabled={guessedLettersSet.has(letter)}
      className={`h-12 w-12 m-1 text-white rounded-md ${buttonStyle(letter)} ${
        guessedLettersSet.has(letter) ? '' : 'cursor-pointer'
      }`}
    >
      {letter}
    </button>
  );
});

  return(
    <>
      {buttons}
    </>
  )
}

export default LetterButtons;
