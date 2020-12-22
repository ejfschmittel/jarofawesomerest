import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'

import "../styles/components/image-input.scss"

const ImageInput = ({value, onChange, initialImage}) => {
    const [previewImage, setPreviewImage] = useState(null)


    useEffect(() => {
        console.log(initialImage)
        if(initialImage){
           setPreviewImage(initialImage)
        }
    }, [initialImage])

    const loadPreviewImage = (image) => {
        if(image){
            if(previewImage){
                URL.revokeObjectURL(previewImage)
            }
            setPreviewImage(URL.createObjectURL(image))
        }
    }

    const onAddImage = (e) => {
        // load image locally
        loadPreviewImage(e.target.files[0])
        if(onChange) onChange(e)
    }

    return (
        <label 
            className={`image-input ${previewImage && "image-input--filled"}`} 
            style={{backgroundImage: previewImage ? `url("${previewImage}")` : ""}}
            >
            <input type="file" onChange={onAddImage} />


            {previewImage ? 
            <div className="image-input__center image-input__show-on-hover">
                Change Feature Image
                <FontAwesomeIcon icon={faImage} size="2x" />
            </div>
            :
            <div className="image-input__center">
                Add Feature Image
                <FontAwesomeIcon icon={faImage} size="2x" />
             </div>
            }
           
        
     </label>
    )
}

export default ImageInput