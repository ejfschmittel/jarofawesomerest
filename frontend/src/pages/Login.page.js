import React, {useState, useEffect} from 'react'
import {loginUser} from "../redux/accounts/accounts.actions"
import {useSelector, useDispatch} from "react-redux"

import "../styles/components/login.scss"

const LoginPage = () => {
    const dispatch = useDispatch()

    const loginErrors = useSelector(({accountsReducer}) => accountsReducer.loginErrors)
    const isLoggingIn = useSelector(({accountsReducer}) => accountsReducer.isLoggingIn)

    const [loginCredentials, setLoginCredentials] = useState({
        username_or_email: "",
        password: "",
    })

    const onChange = (e) => {
        const {name, value} = e.target
        setLoginCredentials({...loginCredentials, [name]: value})
    }

    const onLogin = (e) => {
        e.preventDefault();
        dispatch(loginUser(loginCredentials))
    }

    return (
        <div className="center-body-container">
           <div className="form1">
                <header className="form1-header">
                    <h1 className="form1-header__title">Login to Jar of Awesome</h1>
                    <div className="form1-header__notification">
                       {loginErrors ? 
                            <span style={{color: "red"}}>{loginErrors[Object.keys(loginErrors)[0]][0]}</span>
                        :
                        "Save and relive your most precious memories now!"
                       } 
                    </div>
                </header>
                <form>                   
                    <div className="form1-input">
                        
                        <input type="text" name="username_or_email" id="username_or_email" onChange={onChange} value={loginCredentials.username_or_email} required/>       
                        <label htmlFor="username_or_email">Username or Email</label>           
                    </div>
                    <div className="form1-input">                      
                        <input id="password" type="text" name="password" onChange={onChange} value={loginCredentials.password}  required/>   
                        <label htmlFor="password" >Password</label>       
                    </div>

                    <button className="form1-button" onClick={onLogin} disabled={isLoggingIn}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage