/*
@param {the word which is given a input and is expected to be guessed} originalWord
@param {Letters which are guessed by the user already} guessedLetters

example: originalWord -> 'HUMBLE'
guessed letters ['H', 'M', 'E']

return -> H_M_E
*/

export function getMaskedString(originalWord, guessedLetters){
    
    guessedLetters = guessedLetters.map(letter => letter.toUpperCase()); //converting to uppercase

    const guessedLetterSet = new Set(guessedLetters);
    //set is an internal data structure of javascript, helps in fast searching
    //agar hum chahte to array me direct find method bhi use kr skte the
    //set learning purpose ke liye tha, ek extra cheez seekh gye

    //originalWord.toUpperCase().spllit('') returns an array with each char capitalised and seperated as elements

    const result = originalWord.toUpperCase().split('').map(char=>{
        if(guessedLetterSet.has(char)){
            return char;
        }
        return '_';
    })

    return result;
}