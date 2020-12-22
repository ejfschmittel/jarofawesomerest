import React from 'react'
import {useDispatch} from "react-redux"
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"

import {logoutUser} from "../redux/accounts/accounts.actions"

import "../styles/components/header.scss";

const Header = () => {
    const dispatch = useDispatch();

    const isLoggedIn = useSelector(({accountsReducer}) => !!accountsReducer.authToken)
    const user = useSelector(({accountsReducer}) => accountsReducer.user)

    console.log(user)
  


    const onLogout = () => {
        dispatch(logoutUser())
    }

    return (
        <header className="main-header">
            <div className="body-container main-header__container">
                <Link to="/"className="main-header__title">Jar of Awesome</Link>

                <nav className="main-header__nav">
                    <Link to="/" className="main-header__nav-link">Discover</Link>
                    {!isLoggedIn ? 
                        <React.Fragment>
                            <Link to="/login" className="main-header__nav-link">Login</Link>
                            <Link to="/signup" className="main-header__nav-link">Signup</Link>
                            
                        </React.Fragment>
                    :
                        <React.Fragment>
                            <Link to={`/users/${user.user_id || user.id}/memories`} className="main-header__nav-link">My Memories</Link>
                            <Link to="/" className="main-header__nav-link">Profile</Link>
                            <a onClick={onLogout} className="main-header__nav-link">Logout</a>
                        </React.Fragment>
                    }        
                </nav>
            </div>
        </header>
    )
}

export default Header