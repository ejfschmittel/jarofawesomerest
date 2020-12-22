import React, {useState, useEffect} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faImage } from '@fortawesome/free-solid-svg-icons'

import {useSelector, useDispatch} from "react-redux"

import {getMemory} from "../redux/memories/actions"

import DeleteMemoryButton from "../components/DeleteMemoryButton.component"
import ImageInput from "../components/ImageInput.component"

// private: only you
// only: friends
// public: everbody
// via link

import "../styles/components/memory-editor.scss"

const EditMemoryPage = ({match}) => {
    const dispatch = useDispatch()
    const memoryId = match.params.id
    const memory = useSelector(({memoriesReducer}) => memoriesReducer.memories[memoryId] ? memoriesReducer.memories[memoryId] : null)


    const [formData, setFormData] = useState({
        title: "", 
        image: null,
        date: "",
        tags: "",
        content: "",
        viewing_permissions: ""
    })
    
    const [expanded, setExpanded] = useState(false)




    useEffect(() => {
       // load memory
       dispatch(getMemory(memoryId))
    }, [])

    useEffect(() => {
        // load memory
        setFormData({...formData, ...memory})
     }, [memory])

    const onAddImage = (e) => {
        setExpanded(true)
    }

    const onChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    return (
        <div className="container container--800">
            <form className="memory-editor">
                <div className="memory-editor__header">
                    <div className="memory-editor__headline">
                        <h1>Edit / Delete Memory</h1>

                        <DeleteMemoryButton isDeleting={memory ? memory.deletePending : false} memoryId={memory ? memory.id : null}/>
                
                    </div>
                    <input type="text" placeholder="title" name="title" value={formData.title} onChange={onChange}/>

                    <div className="memory-editor__row">
                        <input name="date" type="date" value={formData.date} onChange={onChange}/>
                        <select name="viewing_permissions" value={formData.viewing_permissions} onChange={onChange}>
                            <option value="PR">private</option>
                            <option value="FO">friends only</option>
                            <option value="PU">public</option>            
                        </select>
                    </div>

                    <button className="button button--full button--success">Update Memory</button>
                </div>
                <div>
                    <ImageInput />
                    <input type="text" placeholder="tags" />
                 
                    <textarea placeholder="Notes">

                    </textarea>
                    <button className="button button--full button--success">Update Memory</button>
                </div>
            </form>
        </div>
    )
}

export default EditMemoryPage