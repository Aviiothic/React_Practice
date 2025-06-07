import { Link } from "react-router-dom";
import TextInputFormContainer from "../components/textInputForm/TextInputFormContainer";
function StartGame() {
  return (
    <div>
      <h1>Start Game</h1>
      <Link to='/play' className="text-white bg-blue-700"> Play Game</Link>
      {/*Link react router dom ka internal component hai iska fayda ye hai ki href se page refresh 
      ho jayega lekin agar link to use krenge to refresh nahi hoga aur SPA ka proper feel aayega
      aur sara state bhi */} 
     <TextInputFormContainer />

     {/* ab yahan pe ek dikkat aa gya hum chahte hai ki user jab ek word fill kr de aur submit
     pe click kre to uske bad wo play game page pe ja ske, lekin wahan janke ke liye to link ka use
     krna pdega kyuki link href jaisa hi kam krta hai, button se to wo kam ho nahi skta, to aap bolenge
     ki bhaiya to submit button ki jagah link/href hi lga dijiye na aur usko css se button jaisa dikha
     diya jayega, lekin mere bete aise krne me dikkat hai, routing to ho jayega lekin hum koi logic/check
     nahi lga payenge, man lo ki hum chahte hai ki input box khali hai to user rediect na ho to uske liye
     logic kahan likhenge, href se to wo kam na ho payega
     ---------------------------------------------------------------------

     yahan pe react hame ek aur tarika deta hai dusre page pe jane ka, navigator ka, ye ek hook hai
     iska name hai useNavigator ka, ye ek navigator function dega, jisko jab bhi call krenge to ye hame
     programmatically ek page se dusre page pe le jayega, 

     uska use humlog handleFormSubmit function me kiye hai, (TextInputFormContainer) wale page me 
     */}

    </div>
  );
}

export default StartGame;

//<> </> react fragments, can be used to bind multiple elements, does not introduces extra node in dom
// in react we can write comments using {/* */}
