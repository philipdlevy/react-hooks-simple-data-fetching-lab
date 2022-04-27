import React, {useEffect, useState} from "react";

function App() {
    const [dogImages, setDogImages] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    

    
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((resp) => resp.json())
            .then((image) => {
                setDogImages(image.message)
                setIsLoaded(true)
            })
    }, [])
    console.log(!isLoaded)
    if (!isLoaded) return <p>Loading...</p>;

    return (
        <>
           <img src={dogImages} alt="A Random Dog"/>
        </>
    )
}

export default App;
