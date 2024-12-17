import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Logout from './Logout';
import "./style/AssetInfo.css"

const AssetInfo = () => {
    const [assets, setAssets] = useState([]);
    const [search, setSearch] = useState();


    useEffect(() => {
        fetchAssets();
    }, []);

    const fetchAssets = () => {
        axios
            .get('http://localhost:5000/asset/info')
            .then((response) => {
                setAssets(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if(search===undefined ||search.trim() === ''){
            fetchAssets();
            return;
        }
        

        axios
            .get(`http://localhost:5000/asset/info/department/${search.trim()}`)
            .then((response) => {
                setAssets(response.data);
            })
            .catch((error) => {
                console.log(error);
                setAssets([]);
            });
    };
    return (
        <div>
            <nav className='navbar'>
                <div className='logoHead'>
                    <img src='imgsymbol.png' className='logo' ></img>
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
                    <div className='back'><Link to={'/adminhome'}>Back</Link></div>

                    <div className='addnew'>
                        <div className='search'>

                            <h1>Asset Info</h1>
                            <form onSubmit={handleSearch} className='search-i' >
                                <input
                                    type='text'
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder='Search by Department'
                                    className='search-bar'
                                />
                                <button type='submit' className='search-button'>
                                    Search
                                </button>
                            </form>
                        </div>
                        <Link to={'/asset/add'}>ADD NEW</Link>
                    </div>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Location</th>
                                <th>Department</th>
                                <th>Sub-Section</th>
                                <th>Computer ID</th>
                                <th>User Name</th>
                                <th>View</th>
                            </tr>
                        </thead>
                        <tbody>
                            {assets.map((asset, index) => (
                                <tr key={asset._id} >
                                    <td>{index + 1}</td>
                                    <td>{asset.location}</td>
                                    <td>{asset.department}</td>
                                    <td>{asset.subSection}</td>
                                    <td>{asset.computerID}</td>
                                    <td>{asset.username}</td>

                                    <td>
                                        <div className='view'>
                                            <Link to={`/assetinfo/${asset._id}`}>
                                                View
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

export default AssetInfo