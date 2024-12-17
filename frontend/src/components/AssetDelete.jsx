import React from 'react'
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Logout from './Logout';
import './style/Delete.css';
import img from './images/img.png';
const AssetDelete = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const handlebook = () => {
        axios
            .delete(`http://localhost:5000/asset/delete/${id}`)
            .then(() => {
                navigate('/assetinfo');
            })
            .catch((error) => {
                alert('Some error occured');
                console.log(error);
            })
    };
    const cancel = () => {
        navigate(`/assetinfo/${id}`);
    };

    return (
        <div className="p-4">
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
                    <h1>Delete Asset</h1>
                    <div>
                        <h3>Are you sure to delete this Asset</h3>
                        <div className="button-s">
                            <button className="delete" onClick={handlebook}>Delete</button>
                            <button className="canceld" onClick={cancel} >Cancle</button>
                        </div>

                    </div>
                </main>
            </div>

        </div>
    )
}

export default AssetDelete;