import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {getUserMemories} from "../redux/memories/memories.actions"
import {Link} from "react-router-dom"

const UserMemories = ({match}) => {

    const dispatch = useDispatch()
    const userid = match.params.uuid
    const {pending, errors, memories: userMemories} = useSelector(({memoriesReducer}) => {
        return memoriesReducer.usersMemories[userid] ? memoriesReducer.usersMemories[userid] : {
            pending: false,
            errors: null,
            memories: []
        } 
    })

    const memories = useSelector(({memoriesReducer}) => memoriesReducer.memories)

    console.log(pending)
    console.log(errors)
    console.log(memories)
  
    

    useEffect(() => {
        dispatch(getUserMemories(userid, {}))
    }, [])

    
   


    return (
        <div className="container">
            <h1>Memories of User</h1>

            <div>
              {userMemories.map(userMemoryId => {
                  const memory = memories[userMemoryId]
                  return (<div><Link to={`/memories/${memory.id}`}>{memory.title}</Link></div>)
              })}
            </div>
        </div>
    )
}

export default UserMemories