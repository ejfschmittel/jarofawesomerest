import { faBatteryEmpty, faCog } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useState, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {Link} from "react-router-dom"

import {getMemory} from "../redux/memories/actions"

import "../styles/components/memory-detail.scss"

const useMemory = (memoryId, defaults={}) => {
    const dispatch = useDispatch();
    const memory = useSelector(({memoriesReducer}) => memoriesReducer.memories[memoryId] ? memoriesReducer.memories[memoryId] : {
        title: "",
        content: "",
        date: "",
        ...defaults
    })

    console.log(memory)

    useEffect(() => {
        dispatch(getMemory(memoryId))
    },[])

    return memory
}

const MemoryDetail = ({match}) => {
    const dispatch = useDispatch()
    const memoryId = match.params.id

    const memory = useMemory(memoryId)

    return (
        <div className="container">

            <div className="memory-detail">
               <header className="memory-detail__header">
                   <h1 className="memory-detail__title">{memory.title}</h1>
                   <div className="memory-detail__date">
                       {memory.date}
                   </div>

                   <Link to={`/memories/${memoryId}/edit`} className="memory-detail__options">
                        <FontAwesomeIcon icon={faCog} size="3x"/>
                   </Link>
               </header>

               {memory.feature_image && 
                <div className="memory-detail__feature-img" style={{backgroundImage: `url("${memory.feature_image}")`}}>test</div>
               }
               
            </div>
        


           


        </div>
    )   
}

export default MemoryDetail