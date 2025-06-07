import getButtonStyling from "./getButtonStyling";

//function Button(props){
// props is an object and has acces to all the attributes passed while calling this component
// one better way is to use Button({text}), destructuring the props
function Button({type="button", text, onClickHandler, styleType="default"}){
    return (//in jsx events are written in camelCase
        <button 
            type={type}
            onClick={onClickHandler}
            //style={{'backgroundColor' : 'red', 'color' : 'white'}} //inline styling
            //pehle bracket object evaluation ke liye aur dusra object definition ke liye
            className={`text-white ${getButtonStyling(styleType)} px-4 py-2`}
            //class is reserved keyword in js hence className
        >
            {text}
        </button>
    )
}
//components ki jimmedari hai events aur calls ko expect krna, implementation jahan se call hoga, 
//wahahn pe decribe kiya jayega

export default Button;