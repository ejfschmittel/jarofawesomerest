import React, {useState, useEffect} from 'react'

import {useDispatch, useSelector} from "react-redux"
import {createMemory} from "../redux/memories/memories.actions"

import "../styles/components/create-memory.scss"


const EMPTY_MEMORY_DATA = {
    title: "",
    date: "",
}


Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});

const getCurrentDate = () => {
    return new Date().toDateInputValue()
}

const CreateMemoryShortcut = () => {
    const [memoryData, setMemoryData] = useState(EMPTY_MEMORY_DATA)


    const {pending, errors} = useSelector(({memoriesReducer}) => memoriesReducer.createMemory)


    useEffect(() => {
        console.log("hello")
       setMemoryData({...memoryData, date: getCurrentDate()})
    }, [])


   

    const dispatch = useDispatch();

    const onChange = (e) => {
        const {name, value} = e.target
        setMemoryData({...memoryData, [name]: value})
    }

    const onCreateMemory = (e) => {
        e.preventDefault();
        console.log(memoryData)

        dispatch(createMemory(memoryData))
    }

    return (
        <div className="container create-memory">
            <input type="text" placeholder="title" name="title" onChange={onChange} value={memoryData.title}/>      
            <input type="date" name="date" onChange={onChange} value={memoryData.date}/>
            <button onClick={onCreateMemory} disabled={pending}>Create new Memory</button>
        </div>
    )
}

export default CreateMemoryShortcut