import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Logout from './Logout';
import './style/CreateUser.css';
import './style/AdminHome.css';
import img from './images/img.png';

const CreateUser = () => {
    const [userid, setUserid] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();



    const handleSaveBook = () => {
        if (password !== confirmPassword) {
            alert('Password are not matching')
        }

        else {
            const data = {
                userid,
                password,
            }
            axios
                .post('http://localhost:5000/user/register', data)
                .then(() => {
                    navigate('/userinfo');
                })
                .catch((error) => {
                    if (error.response.status === 400) {
                        alert('Fill all the required fields');
                    }
                    else if (error.response.status === 401) {
                        alert('Username Already taken');
                    }
                    else {
                        alert('An error Occured');
                        console.log(error);
                    }

                });

        }


    };
    return (
        <div>

            <nav className='navbar'>

                <div className='logoHead'>
                    <img src={img} alt='s' className='logo' />
                    <h1>VPA Asset Managment</h1>
                </div>

                <Logout />
            </nav>
            <div className='container'>
                <nav className='side-bar'>
                    <Link to={`/adminhome`}>Home</Link>
                    <Link to={`/assetinfo`}>Assets</Link>
                    <Link to={`/userinfo`}>Users</Link>
                </nav>
                <main className='content'>
                    <div className='head'><h1 className="text-3xl my-4">New User</h1></div>
                    <div className='labels'>
                        <label>User ID</label>
                        <input
                            type='text'
                            value={userid}
                            onChange={(e) => setUserid(e.target.value)}
                            required
                        />
                        <label>Password</label>
                        <input
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <label>Confirm Password</label>
                        <input
                            type='password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />

                    </div>
                    <div className='buttons'>
                        <button className='save' onClick={handleSaveBook}>Save</button>
                        <Link to='/userinfo'><button className='cancel'>Cancle</button></Link>
                    </div>
                </main>
            </div>
        </div>
    )

}

export default CreateUser