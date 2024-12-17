import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Logout from './Logout';
import './style/AssetView.css';
import img from './images/img.png';

const AssetView = () => {
    const [asset, setAsset] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:5000/asset/info/${id}`)
            .then((response) => {
                console.log(response.data);
                setAsset(response.data);
            })
            .catch((error) => {
                console.log(error);
                console.log('Error response:', error.response);
            })
    }, [id]);
    const calc=(gb)=>{
        if(gb===null){return ''};
        if(gb>100){return (gb+" GB");}
        return (gb+" TB")
    };

    const calr=(ram)=>{
        if(ram===null){return""}
        return (ram+' GB')
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
                    <div className='back'><Link to={'/assetinfo'}>Back</Link></div>
                    <div className='show-edit-delete'>
                        <h1>Show Asset</h1>
                        <div>
                            <Link className="edit" to={`/assetedit/${id}`}>Edit</Link>
                            <Link className="Delete" to={`/assetdelete/${id}`}>Delete</Link>
                        </div>
                    </div>

                    <div>
                        <div className='g'>General</div>
                        <div className='general'>
                            <label>Location</label>
                            <input
                                className='input'
                                disabled
                                value={asset.location}
                            />

                            <label>Department</label>
                            <input
                                className='input'
                                disabled
                                value={asset.department}
                            />

                            <label>SubSection</label>
                            <input
                                className='input'
                                disabled
                                value={asset.subSection}
                            />

                            <label>ComputerID</label>
                            <input
                                className='input'
                                disabled
                                value={asset.computerID}
                            />

                            <label>Username</label>
                            <input
                                className='input'
                                disabled
                                value={asset.username}
                            />



                            <label>Mobile No</label>
                            <input
                                className='input'
                                disabled
                                type='number'
                                value={asset.mobileno}

                            />

                            <label>Outdated</label>
                            <select
                                className='select-option'
                                disabled
                                value={asset.outdated}
                            >
                                <option value=""></option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>


                        <div className='computer-details'>
                            <div className='cd'>Computer Details</div>
                            <label>Computer Name</label>
                            <input
                                className='input'
                                disabled
                                value={asset.computerName}
                            />

                            <label>IP Address</label>
                            <input
                                className='input'
                                disabled
                                value={asset.IPaddress}
                            />

                            <label>Internet Access</label>
                            <select
                                className='select-option'
                                disabled
                                value={asset.internetAccess}
                            >
                                <option value=""></option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>


                            <label>MAC Address</label>
                            <input
                                className='input'
                                disabled
                                value={asset.MACaddress}
                            />
                        </div>
                        <div className='os'>
                            <div className='o'>OS Information</div>
                            <label>OS</label>
                            <input
                                className='input'
                                disabled
                                value={asset.os}
                            />

                            <label>OS Version</label>
                            <input
                                className='input'
                                disabled
                                value={asset.osVersion}
                            />

                            <label>OS Build</label>
                            <input
                                className='input'
                                disabled
                                value={asset.osBuild}
                            />

                            <label>OS Activation Status</label>
                            <select
                                className='select-option'
                                disabled
                                value={asset.osActivationStatus}
                            >
                                <option value=""></option>
                                <option value="yes">Activated</option>
                                <option value="no">Not Activated</option>
                            </select>
                        </div>

                        <div className='msoffice'>
                            <div className='mof'>Ms office information</div>
                            <label>MS Office Version</label>
                            <input
                                className='input'
                                disabled
                                value={asset.MSofficeVersion}
                            />

                            <label>MS Office Activation Status</label>
                            <select
                                className='select-option'
                                disabled
                                value={asset.MSofficeActivationStatus}
                            >
                                <option value=""></option>
                                <option value="yes">Activated</option>
                                <option value="no">Not Activated</option>
                            </select>
                        </div>

                        <div className='monitor'>
                            <div className='mo'>Monitor Information</div>
                            <label>Monitor Model</label>
                            <input
                                className='input'
                                disabled
                                value={asset.monitorModel}
                            />

                            <label>Monitor Serial No</label>
                            <input
                                className='input'
                                disabled
                                value={asset.monitorSerialno}
                            />

                            <label>Monitor Status</label>
                            <select
                                className='select-option'
                                disabled
                                value={asset.monitorStatus}
                            >
                                <option value=""></option>
                                <option value="yes">Working</option>
                                <option value="no">Not Working</option>
                            </select>
                        </div>
                        <div className='cpu'>
                            <div className='c'>CPU Information</div>
                            <label>CPU Model</label>
                            <input
                                className='input'
                                disabled
                                value={asset.cpuModel}
                            />

                            <label>CPU Serial No</label>
                            <input
                                className='input'
                                disabled
                                value={asset.cpuSerialno}
                            />

                            <label>CPU Status</label>
                            <select
                                className='select-option'
                                disabled
                                value={asset.cpuStatus}
                            >
                                <option value=""></option>
                                <option value="yes">Working</option>
                                <option value="no">Not Working</option>
                            </select>
                            <label>RAM</label>
                            <input
                                className='input'
                                disabled
                                value={calr(asset.RAM)}
                            />

                            <label>Hard Disk</label>
                            <input
                                className='input'
                                disabled
                                value={calc(asset.hardDisk)}
                            />

                            <label>Processor</label>
                            <input
                                className='input'
                                disabled
                                value={asset.processor}
                            />
                        </div>

                        <div className='system-info'>
                            <div className='si'>System Information</div>


                            <label>System Install Date</label>
                            <input
                                className='input'
                                disabled
                                type='date'
                                value={asset.systemInstallDate}
                            />

                            <label>System Warranty Status</label>
                            <select
                                className='select-option'
                                disabled
                                value={asset.systemWarrantyStatus}
                            >
                                <option value=""></option>
                                <option value="yes">In Warranty</option>
                                <option value="no">Out of Warranty</option>
                            </select>

                            <label>AntiVirus</label>
                            <select
                                className='select-option'
                                disabled
                                value={asset.antiVirus}
                            >
                                <option value="">Select</option>
                                <option value="yes">Present</option>
                                <option value="no">Not Present</option>

                            </select>
                        </div>

                        <div className='printer'>
                            <div className='p'>Printer Information</div>
                            <label>Printer Model</label>
                            <input
                                className='input'
                                disabled
                                value={asset.printerModel}
                            />

                            <label>Printer Serial No</label>
                            <input
                                className='input'
                                disabled
                                value={asset.printerSerialno}
                            />

                            <label>Printer Status</label>
                            <select
                                className='select-option'
                                disabled
                                value={asset.printerStatus}
                            >
                                <option value=""></option>
                                <option value="yes">Working</option>
                                <option value="no">Not Working</option>

                            </select>
                        </div>

                        <div className='scanner'>
                            <div className='s'>Scanner Information</div>
                            <label>Scanner Model</label>
                            <input
                                className='input'
                                disabled
                                value={asset.scannerModel}
                            />

                            <label>Scanner Serial No</label>
                            <input
                                className='input'
                                disabled
                                value={asset.scannerSerialno}
                            />

                            <label>Scanner Status</label>
                            <select
                                className='select-option'
                                disabled
                                value={asset.scannerStatus}
                            >
                                <option value=""></option>
                                <option value="yes">Working</option>
                                <option value="no">Not Working</option>

                            </select>
                        </div>

                        <div className='ups'>
                            <div className='u'>UPS Information</div>
                            <label>UPS Make</label>
                            <input
                                className='input'
                                disabled
                                value={asset.upsMake}
                            />

                            <label>UPS Capacity</label>
                            <input
                                className='input'
                                disabled
                                value={asset.upsCapacity}
                            />

                            <label>UPS Serial No</label>
                            <input
                                className='input'
                                disabled
                                value={asset.upsSerialno}
                            />

                            <label>UPS Status</label>
                            <select
                                className='select-option'
                                disabled
                                value={asset.upsStatus}

                            >
                                <option value=""></option>
                                <option value="yes">Working</option>
                                <option value="no">Not Working</option>

                            </select>
                        </div>


                    </div>
                </main>
            </div>

        </div>
    )
}

export default AssetView