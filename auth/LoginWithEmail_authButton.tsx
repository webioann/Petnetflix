import React from 'react'
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase.config'
import { IAuthButtonProps } from '../types/auth.types'
import './auth-button.scss'

const LoginWithEmail_authButton: React.FC<IAuthButtonProps> = ({ email, password, setWarning, setError }) => {

    const navigate = useNavigate()

    const loginWithEmail = async () => {
        try {
            // "classic" authentication with email and password with turning at Home page
            await signInWithEmailAndPassword(auth, email, password)
            navigate("/")
        }
        catch(error){
            setWarning(true)
            //code get error message from server and to sliced from it "message" for showing in error report 
            let message = 'Unknown Error'
            if (error instanceof Error) {
                let length = error.message.length
                let shortMessage = error.message.substring(error.message.indexOf("/") + 1, length - 2)
                let temp = shortMessage.replace(/-/g, " ")
                message = temp
            }
            setError(message)
        }
    }

    return (
        <button className='g-button auth-button' onClick={loginWithEmail}>
            Login with email
        </button>
    )
}

export default LoginWithEmail_authButton;