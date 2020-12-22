import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import {useDispatch} from "react-redux"


import {deleteMemory} from "../redux/memories/actions"


// TODO: add are you sure

const DeleteMemoryButton = ({memoryId, isDeleting}) => {
    const dispatch = useDispatch()

    const onDelete = (e) => {
        e.preventDefault();
        dispatch(deleteMemory(memoryId))
    }

    return (
        <button className="button button--danger" disabled={isDeleting || !memoryId} onClick={onDelete}>
            <FontAwesomeIcon icon={faTrashAlt} size="1x" />
            Delete
        </button>
    )
}

export default DeleteMemoryButton