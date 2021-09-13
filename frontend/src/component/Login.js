import React, { useState } from 'react'
import axios from 'axios'
import { NavLink, useHistory } from 'react-router-dom'
import Navbar from './Navbar';


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [msg, setMsg] = useState('')

    const loginUser = async (e) => {
        // console.log(email,password)
        e.preventDefault();
        if (email === "" || password === "") {
            setMsg('All field are require')
        } else {
            axios.post('/signin', { email, password })
                .then((res) => {
                    console.log(res);
                    history.push("/")
                }).catch((err) => {
                    console.log(err);
                    setMsg('Invalid Email/Password')
                });
        }
    }

    return (
        <div className="body">
            <Navbar/>
            <div className="container main">
                <h3 id="err">{msg}</h3>
                <div className="title">Login</div>
                <div className="content">
                    <form method="POST">
                        <div className="user-details">
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
                        </div>
                        <div className="button">
                            <input type="submit" value="Login"
                                onClick={loginUser}
                            />
                        </div>
                    </form>
                </div>
                <NavLink to="/register">SignUp</NavLink>
            </div>
        </div>
    )
}

export default Login
