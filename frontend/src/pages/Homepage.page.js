import React from 'react'


import CreateMemoryShortcut from "../components/CreateMemoryShortcut.component"
import RandomMemory from "../components/RandomMemory.component"

const HomePage = () => {
    return (
        <div className="container">

            <CreateMemoryShortcut />

            <RandomMemory />
        </div>
    )
}

export default HomePage