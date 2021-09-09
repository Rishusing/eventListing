import React, { useState } from 'react'
import axios from 'axios'
import { NavLink, useHistory } from 'react-router-dom'
import Navbar from './Navbar';

function Register() {
    const history = useHistory();
    const [err, setErr] = useState('')
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const user = { name, email, password, cpassword };
    const PostData = async (e) => {
        e.preventDefault();
        if (password !== cpassword) {
            setErr('Password mismatch')
        } else {
            try{
                let res = await fetch('https://new-mern-event-app.herokuapp.com/register',{
                    method:'POST',
                    mode:'no-cors',
                    headers:{
                        'Accept':'application/json',
                        'Content-type':'application/json'
                    },
                    body:JSON.stringify({
                        name , email, password ,cpassword
                    })
                })
                
                if(res.status == 404){
                    setErr('All fields are require')
                }else if(res.status == 404){
                    setErr('Email already exist')
                }else{
                    history.push('/')
                }
            }catch(e){
                setErr('Something went wrong')
            }
        }
    }
    return (
        <div className='body'>
            <Navbar/>
            <div className="container main">
                <h4 id="error">{err}</h4>
                <div className="title">Registration</div>
                <div className="content">
                    <form method="POST">
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Full Name</span>
                                <input type="text" name="name" placeholder="Enter name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="input-box">
                                <span className="details">Email</span>
                                <input type="text" name="email" placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="input-box">
                                <span className="details">Password</span>
                                <input type="text" name="password" placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="input-box">
                                <span className="details">Confirm Password</span>
                                <input type="text" name="cpassword" placeholder="Confirm Password"
                                    value={cpassword}
                                    onChange={(e) => setCpassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="button">
                            <input type="submit" value="SignUp" name="register" onClick={PostData} />
                        </div>
                        <NavLink to="/login">Login</NavLink>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register