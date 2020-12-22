import React from 'react'
import "../styles/components/random-memory.scss"

const RandomMemory = () => {
    return (
        <div className="random-memory-container">
            <RandomMemorySlider />
            <button className="random-memory-button">Another Memory</button>
        </div>
    )
}

const RandomMemorySlider = () => {
    return (
        <div className="random-memory-slider">
            <RandomMemoryDisplay />
        </div>
    )
}


// if no image display memory center (keep hight constant 600px h / 800px w)
const RandomMemoryDisplay = (memory) => {
    return (
        <div className="random-memory">
            <h3 className="random-memory__title">Going Whalewatching in Malta </h3>
            <div className="random-memory__img-container" style={{backgroundImage: `url("https://www.whaledefence.org/wp-content/uploads/2019/01/cropped-header.jpg")`}}>

            </div>
           
        </div>
    )
}

export default RandomMemory