import React from 'react'
import earthLogo from '../images/earth-logo-white.png'
export default function NavBar() {
    return (
        <div className='nav-bar-container'>
            <img src={earthLogo} className='nav-bar-logo' />
            <h1 className='nav-bar-title'>my travel journal.</h1>
        </div>
    )
}