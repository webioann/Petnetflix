'use client'
import React, { useState } from 'react'
import LoginWithEmail_authButton from '../FirebaseAuthComonents/LoginWithEmail_authButton'
import SignUpWithEmail_authButton from '../FirebaseAuthComonents/SignUpWithEmail_authButton'
import GoogleSignIn_authButton from '../FirebaseAuthComonents/GoogleSignIn_authButton'
import { HiOutlineMail } from 'react-icons/hi'
import { GoEye,GoEyeClosed } from 'react-icons/go'
import './register-form.scss'

type FormProps = { variant: 'signup' | 'login'}

const RegistrationForm:React.FC<FormProps> = ({variant}) => {

    // === one form for login and signup users ===
    const [inputType,setInputType] = useState<'text' | 'password'>('password')
    const [emailFocus, setEmailFocus] = useState<boolean>(false)
    const [passwordFocus, setPasswordFocus] = useState<boolean>(false)
    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [warning,setWarning] = useState<boolean>(false)
    const [error,setError] = useState<string | null>(null)

    return (
        // if type="signup" work one function if "login" other
        <form className='form' onSubmit={(event) => event.preventDefault() }>
             {/* EMAIL */}
            <div className='email-box'>
                <label className={emailFocus || email.length > 0 ? 'input-label-up' : 'input-label'}>
                    Email
                </label>
                <div className='email-input-box'>
                    <input className='reg-input'
                        onFocus={() => {
                            setEmailFocus(true)
                            setPasswordFocus(false)
                        }}
                        onBlur={() => {
                            email.length == 0 ? setEmailFocus(false) : setEmailFocus(true)
                        }}
                        type='email' 
                        onChange={event => setEmail(event.target.value)}/>
                    <HiOutlineMail className='input-icon'/>
                </div>
            </div>
            {/* PASSWORD */}
            <div className='password-box'>
                <label className={passwordFocus || password.length > 0 ? 'input-label-up' : 'input-label'}>
                    Password
                </label>
                <div className='password-input-box'>
                    <input className='reg-input'
                        onFocus={() => {
                            setPasswordFocus(true)
                            setEmailFocus(false)
                        }}
                        onBlur={() => {
                            password.length == 0 ? setPasswordFocus(false) : setPasswordFocus(true)
                        }}
                        type={inputType} 
                        onChange={event => setPassword( event.target.value)}/>
                    {inputType === 'text' 
                        ? <GoEye className='input-icon' onClick={() => setInputType('password')}/> 
                        : <GoEyeClosed className='input-icon' onClick={() => setInputType('text')}/>
                    }
                </div>
            </div>
            { variant === 'login' && <LoginWithEmail_authButton 
                    email={email}
                    password={password} 
                    setWarning={setWarning}
                    setError={setError}
                />}
                { variant === 'signup' && <SignUpWithEmail_authButton 
                    email={email} 
                    password={password} 
                    setWarning={setWarning}
                    setError={setError}
                />}
                <GoogleSignIn_authButton/>
        </form>
    )
}

export default RegistrationForm;