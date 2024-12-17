import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./style/Login.css";

const Login = () => {
    const [userid, setUserid] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/user/login', { userid, password });
            const { token, role } = res.data;
            localStorage.setItem('token', token);

            if (role === 'admin') {
                navigate('/adminhome');
            } else {
                navigate('/clienthome');
            }
        } catch (err) {
            console.error(err);
            alert('Invalid credentials');
        }
    };

    return (
        <div className="container">
            <div className='login-section'>

                <h1 align="center"><img src='imgsymbol.png' alt='s' className='logo-login'/>VPA<br></br>Asset Managment</h1>

                <form onSubmit={handleLogin}>
                    <h2 align="center">Login</h2>
                    <div>
                        <input type="text" value={userid} placeholder="USER ID" onChange={(e) => setUserid(e.target.value)} required />
                    </div>
                    <div>
                        <input type="password" value={password} placeholder="PASSWORD" onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>

            <div className="image-section">
                <img src="images.jpg" alt="Iis" />
            </div>
        </div>

    );
};

export default Login;

