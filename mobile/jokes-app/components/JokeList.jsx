import { useState, useEffect, } from "react"
import { Button } from "react-native"
import joke from "./joke"
import Punchline from "./Punchline"

export default function JokesList() {
    const [jokes, setJokes] = useState()
    const [currentjokes, setCurrentJokes] = useState(0)

    useEffect(() => {
        fetch('https://api.sampleapis.com/jokes/goodJokes')
            .then(res => res.json())
            .then(setJokes) 
            .then(alert)
            .finally(shuffleJokes)
    }, [])

    const shuffleJokes = (array) => {
for (let i = array.length -1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const shuffleJokes = () => {
    [array[j], array[i]] = [array[i], array[j]]
}
setJokes(array)
}


        if (currentjokes < jokes.length - 1) {
            setCurrentJokes(currentjokes + 1)
        } else {
            setCurrentJokes(0)
        }
    }
    return (
        <>
    
            <Joke joke={!jokes ? 'loading...':jokes[currentjokes].setup} />
            <Punchline Punchline={jokes && jokes [currentjokes].Punchline}/>
            <Button onPress={nextjoke} title="Next Joke" />
        </>
    )
}