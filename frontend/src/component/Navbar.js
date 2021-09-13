import React from 'react'
import {NavLink} from 'react-router-dom'


function Navbar() {
    
    return (
        <>
            <div className='navbar'>
                <div className='nav-logo'><NavLink to="/"><h4 id='x'>Home</h4></NavLink></div>
                <div className='nav-links'>
                    <ul>
                        <li><NavLink to="/login">Login/</NavLink></li>
                        <li><NavLink to="/register">SignUp</NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
