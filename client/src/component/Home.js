import React from 'react'
import {NavLink} from 'react-router-dom'
import Navbar from './Navbar'
const Home = () => {
    return (
        <>
        <Navbar/>
        <div className="homePage">
            <div className="content-left">
                <div className="circle"></div>
                <div className="square">
                    <div className="txt">
                        <h2>Now, You can add Event</h2>
                        <h3>Click in Event Button</h3>
                    </div>
                </div>
                <div className="circle1"></div>
            </div>
            <div className="content-right">
                <button id="btn"><NavLink to = "/event">EVENT </NavLink></button>
            </div>
        </div>
        </>
    )
}

export default Home
