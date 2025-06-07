import Level1 from "../../src/assets/Images/1.svg"
import Level2 from "../../src/assets/Images/2.svg"
import Level3 from "../../src/assets/Images/3.svg"
import Level4 from "../../src/assets/Images/4.svg"
import Level5 from "../../src/assets/Images/5.svg"
import Level6 from "../../src/assets/Images/6.svg"
import Level7 from "../../src/assets/Images/7.svg"
import Level8 from "../../src/assets/Images/8.svg"

function Hangman({step}){
    const images = [Level1, Level2, Level3, Level4, Level5, Level6, Level7, Level8];

    return(
        <div className="w-[300px] h-[300px]">
            <img src={step>=images.length ? images[images.length-1] : images[step]} alt="hangman" />
        </div>
    )
}

export default Hangman;