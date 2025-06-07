import { Link } from "react-router-dom";
import Button from "../components/buttons/Button";
import { useEffect, useState } from "react";

function Home(){
    const [word1, setWord] = useState("");

    //browser provides us an inbuilt function to fetch data from external sources, it returns a promise
    async function fetchWords(){
        const response = await fetch("https://3000-firebase-hangmangame-1748577380216.cluster-zumahodzirciuujpqvsniawo3o.cloudworkstations.dev/words");
        const data = await response.json();

        const randomIndex=Math.floor(Math.random()*data.length);
        console.log(data[randomIndex].wordValue);
        setWord(data[randomIndex].wordValue);
    }

    useEffect(()=>{
        fetchWords();
    },[])

    return(
        <>
            <Link to='/play' state={{word : word1}}>
                <Button text="Single Player" />
            </Link>
            <br />
            <Link to='/start'>
                <Button text="Multi Player" styleType="secondary" />
            </Link>
        </>
    )

}

export default Home;