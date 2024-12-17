import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import Logout from "./Logout";
import './style/Delete.css';
import './style/AdminHome.css';
import img from './images/img.png';

const DeleteUser = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const handlebook = () => {
        axios
            .delete(`http://localhost:5000/user/delete/${id}`)
            .then(() => {
                navigate('/userinfo');
            })
            .catch((error) => {
                alert('Some error Occured');
                console.log(error);
            });
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
                    <h1>Delete User</h1>
                    <div>
                        <h3>Are you sure to delete this User</h3>
                        <div className="button-s">
                            <button className="delete" onClick={handlebook}>Delete</button>
                            <Link to='/userinfo'><button className="canceld">Cancle</button></Link>
                        </div>

                    </div>
                </main>
            </div>


        </div>
    )
}

export default DeleteUser