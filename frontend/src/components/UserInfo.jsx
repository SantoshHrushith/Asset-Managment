import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { MdOutlineDelete } from 'react-icons/md';
import Logout from './Logout';
import "./style/UserInfo.css";
import "./style/info.css"
import img from './images/img.png'


const UserInfo = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        axios
            .get('http://localhost:5000/user/info')
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
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
                    <div className='back'><Link to='/adminhome'>Back</Link></div>
                    <div className='addnew'>
                        <h1>User Info</h1>
                        <Link to={'/userinfo/add'}>ADD NEW</Link>
                    </div>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th >No</th>
                                <th >User ID</th>
                                <th >User Role</th>
                                <th >Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user._id} >
                                    <td >{index + 1}</td>
                                    <td >{user.userid}</td>
                                    <td >{user.role}</td>
                                    <td >
                                        <div className='deleteu'>
                                            <Link to={`/userinfo/delete/${user._id}`}>
                                                Delete
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </main>
            </div>




        </div>
    )
}

export default UserInfo;