import React, {useState, useEffect} from 'react'



import {useSelector, useDispatch} from "react-redux"

import {getMemory, editMemory} from "../redux/memories/actions"

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
        date: "",
        tags: "",
        feature_image: null,
        content: "",
        viewing_permissions: ""
    })
    
   



    useEffect(() => {
       // load memory
       dispatch(getMemory(memoryId))
    }, [])

    useEffect(() => {
        setFormData({...formData, ...memory})
     }, [memory])



    const onChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    const onImageChange = (e) => {
        const image = e.target.files[0]
        setFormData({...formData, feature_image: image})
    }

    
    const onEdit = (e) => {
        e.preventDefault();
        const {id, title, date, tags, feature_image, content, viewing_permissions} = formData

        let data = {id,title,date,tags, content, viewing_permissions}

        if(feature_image && typeof feature_image != "string" ){
            console.log("update feature image")
            data = {...data, feature_image}
        }
        console.log(data)
        dispatch(editMemory(data))
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

                    <button className="button button--full button--success" onClick={onEdit}>Update Memory</button>
                </div>
                <div>
                    <ImageInput onChange={onImageChange} initialImage={ memory && memory.feature_image}/>
                    <input type="text" placeholder="tags" />
                 
                    <textarea placeholder="Notes">

                    </textarea>
                    <button className="button button--full button--success" onClick={onEdit}>Update Memory</button>
                </div>
            </form>
        </div>
    )
}

export default EditMemoryPage