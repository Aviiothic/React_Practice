import  { useEffect, useState } from "react";
import TextInputForm from "../textInputForm/TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer(){

    //let inputType="password";
    //agar hum koi normal variable bnaye jaise ki let,var,const to components pehli bar to isko padhega
    //aur use krega lekin wo inke changes ko track nahi krta aur isliye inke change hone se usme koi
    //change nahi hoga

    //to achieve updation in components with change in variables we can use state variables
    //react gives us a function useState to deal with these things
    //these category of functions are called hooks
    //hooks are nothing but special functions for special tasks

    const [inputType, setInputType] = useState("password");
    const [value, setvalue] = useState("");
    const navigate = useNavigate();
    

    function handleFormSubmit(event){
        event.preventDefault(); //aise likha hai kyuki by default form submit hone pe page refresh hota hai
        console.log('Form submitted', value);
        if(value){
            //yahan pehle hum check kr rhe ki value defined hai tabhi redirect kr rhe
            //kuchh bhi refresh nahi hota, aur sara state preserve rhta hai
            //yahan chahe kuchh bhi programming logic likh skte hai using navigate
            //navigate(`/play?word=${value}`);
            //navigate(`/play/${value}`);

            //react router gives us a third way using which we can share data across pages
            //we pass another param state, a property of an object,  inside this we can pass any data
            navigate(`/play`, {state : {word : value}});
        }
    }

    function handleTextInputChange(event){
        console.log(event.target.value);
        console.log('Text input changed');
        setvalue(event.target.value);
    }

    function handleShowHideClick(){
        console.log("Show/Hide button clicked");
        if(inputType==="password"){
            setInputType("text");
        }else{
            setInputType("password");
        }

    } 

    // useEffect(()=>{
    //     console.log('component called on first load'); //should not call on updates
    // }, []); //this would be called only on the first update, we are passing empty dependency array

    // useEffect(()=>{
    //     console.log('component called on first load and updates');
    // });//not passing the dependency array means it will run on every update

    // useEffect(()=>{
    //     console.log('component called on first load and update value changed');
    // },[value]); //adding the value state variable

    // useEffect(()=>{
    //     console.log('component called on first load and inputType value changed');
    // },[inputType]); //adding the inputype state variable

    //WE CAN ADD ONLY State variables, Props, Context values, Any stable reference or 
    //primitive you want to watch IN THE DEPENDENCY ARRAY

    return (
        <>
          <TextInputForm
            inputType={inputType}
            handleFormSubmit={handleFormSubmit}
            handleTextInputChange={handleTextInputChange}
            handleShowHideClick={handleShowHideClick}
          />
          
          {inputType === "password" ? <Temp /> : null}
        </>
      );
    }
    
    // ✅ Temp must return JSX to be mounted
    function Temp() {
      useEffect(() => {
        console.log("Temp component called on first load");
        return () => {
          console.log("Temp component unmounted");
        };
      }, []);//when we return another callback from callback of an effect then, 
             //the returned callback is called when the component is unmounted
    
      return <p>👋 Temp Component Mounted, just a check for mounting and unmounting</p>;
    }
    
    export default TextInputFormContainer;
