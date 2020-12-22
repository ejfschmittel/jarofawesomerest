import React, {useState, useEffect} from 'react'


import "../styles/components/image-input.scss"

const ImageInput = ({value, onChange}) => {
    return (
        <label className={`image-input ${expanded && "image-input--filled"}`}>
            <input type="file" onChange={onAddImage} />

            <div className="image-input__center">
                Add Feature Image
                <FontAwesomeIcon icon={faImage} size="2x" />
            </div>
        
     </label>
    )
}

export default ImageInput