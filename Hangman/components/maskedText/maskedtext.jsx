import { getMaskedString } from "./maskingUtility";

function MaskedText({ text, guessedLetters }) {
  const maskedString = getMaskedString(text, guessedLetters);

  return (
    <>
      {maskedString.map((char, index) => (
        <span key={index} className="mx-1">
          {char}
        </span>
      ))}
    </>
  );
}

export default MaskedText;
