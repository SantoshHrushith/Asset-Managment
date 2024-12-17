import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import AdminHome from './components/AdminHome';
import ClientHome from './components/ClientHome';
import UserInfo from './components/UserInfo';
import CreateUser from './components/CreateUser';
import DeleteUser from './components/DeleteUser';
import AssetInfo from './components/AssetInfo';
import AssetView from './components/AssetView';
import AssetCreate from './components/AssetCreate';
import AssetInfoClient from './components/AssetInfoClient';
import AssetViewClient from './components/AssetViewClient';
import AssetDelete from './components/AssetDelete';
import AssetEdit from './components/AssetEdit';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/adminhome" element={<AdminHome />} />
                <Route path="/clienthome" element={<ClientHome />} />
                <Route path="/userinfo" element={<UserInfo/>} />
                <Route path="/userinfo/add" element={<CreateUser/>} />
                <Route path="/userinfo/delete/:id" element={<DeleteUser/>} />
                <Route path="/assetinfo" element={<AssetInfo/>} />
                <Route path="/assetinfo/:id" element={<AssetView/>} />
                <Route path="/asset/add" element={<AssetCreate/>} />
                <Route path="/assetinfoclient" element={<AssetInfoClient/>} />
                <Route path="/assetinfoclient/:id" element={<AssetViewClient/>} />
                <Route path="/assetdelete/:id" element={<AssetDelete/>} />
                <Route path="/assetedit/:id" element={<AssetEdit/>} />
            </Routes>
        </Router>
    );

}

export default App;
