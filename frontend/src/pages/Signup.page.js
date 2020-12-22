import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch, useStore} from "react-redux"
import {signupUser} from "../redux/accounts/accounts.actions"
import {Link} from "react-router-dom"

import "../styles/components/login.scss"


const EMPTY_SIGNUP_DATA = {
    username: "",
    email: "",
    password: "",
    confirm_password: ""
}

const SignupPage = () => {
    const dispatch = useDispatch()
    const [signupData, setSignupData] = useState(EMPTY_SIGNUP_DATA)

    const [errorMessage, setErrorMessage] = useState(null)

    const signupErrors = useSelector((state) => state.accountsReducer.signupErrors)
    const isSigningUp = useSelector(({accountsReducer}) => accountsReducer.isSigningUp);
    const createdUser = useSelector(({accountsReducer}) => accountsReducer.createdUser);

    useEffect(() => {
        if(signupErrors){
            const first = Object.keys(signupErrors)[0]
            setErrorMessage(signupErrors[first][0])
        }else{
            setErrorMessage(null)
        }

        return () => setErrorMessage(null)
    },[signupErrors])


    useEffect(() => {
        if(createdUser){
            setSignupData(EMPTY_SIGNUP_DATA)
        }
    }, [createdUser])



    const onSignup = (e) => {
        e.preventDefault();
       const {username, email, password, confirm_password} = signupData

       // check if all fields are not empty
       if(!username || !email || !password || !confirm_password){
        setErrorMessage("Fields can not be empty.")
        return;
       }

       // check if passwords match
       if(password != confirm_password){
           setErrorMessage("Password do not match.")
           return;
       }

       dispatch(signupUser({
           username,
           email,
           password
       }))
    }

    const onChange = (e) => {
        setErrorMessage(null)
        const {name, value} = e.target
        setSignupData({...signupData, [name]: value})
    }

    return (
        <div className="center-body-container">
        <div className="form1">
             <header className="form1-header">
                 <h1 className="form1-header__title">Signup to Jar of Awesome</h1>
                 <div className="form1-header__notification">

                     {createdUser ? 
                        <span>User "{createdUser}" was successfull created. <Link to="/login" className="form1-header__notifiction-link">Login now !</Link></span>
                        : errorMessage ? 
                        <span style={{color: "red"}}>{errorMessage}</span> 
                        :
                        "Save and relive your most precious memories now!"
                    }
                     
                 </div>
             </header>
             <form>                   
                 <div className="form1-input">                    
                     <input type="text" name="username" id="username" onChange={onChange} value={signupData.username} required/>       
                     <label htmlFor="username">Username</label>           
                 </div>

                 <div className="form1-input">           
                     <input id="email" type="text" name="email" onChange={onChange} value={signupData.email} required/>   
                     <label htmlFor="email">Email</label>       
                 </div>
                 <div className="form1-input">           
                     <input id="password" type="password" name="password" onChange={onChange} value={signupData.password} required/>   
                     <label htmlFor="password">Password</label>       
                 </div>

                 <div className="form1-input">           
                     <input id="confirm_password" type="password" name="confirm_password" onChange={onChange} value={signupData.confirm_password}   required/>   
                     <label htmlFor="confirm_password">Confirm Password</label>       
                 </div>

                 <button className="form1-button" onClick={onSignup} disabled={isSigningUp}>
                     Signup
                 </button>
             </form>

         </div>
     </div>
    )
}

export default SignupPage