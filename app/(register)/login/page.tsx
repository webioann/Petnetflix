'use client'
import React from 'react'
import Link from 'next/link'
import RegistrationForm from '../../../components/RegisterForm/RegisterForm'
import '../register_pages.scss'

function LoginPage() {
    return (
        <section className='register_page'>
            <h1 className='auth_header'>Sign In</h1>
            <RegistrationForm variant='login'/>
            <div className='question'>
                <p className='question_text'>New to Netflix?</p>
                <Link href="/signup" className='question_link link'>Sign up now.</Link> 
            </div>
            <p className='captcha'>
                This page is protected by Google reCAPTCHA to ensure you're not a bot. 
                <span className='captcha_link link'>Learn more.</span> 
            </p>

        </section>
    )
}

export default LoginPage;
