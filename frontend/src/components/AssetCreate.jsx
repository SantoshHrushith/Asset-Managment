import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Logout from './Logout';
import './style/AssetCreate.css';
import img from './images/img.png';
const AssetCreate = () => {
    const [location, setLocation] = useState('');
    const [department, setDepartment] = useState('');
    const [subSection, setSubSection] = useState('');
    const [computerID, setComputerID] = useState('');
    const [username, setUsername] = useState('');
    const [mobileno, setMobileno] = useState('');
    const [outdated, setOutdated] = useState('');
    const [computerName, setComputerName] = useState('');
    const [IPaddress, setIPaddress] = useState('');
    const [internetAccess, setInternetAccess] = useState('');
    const [MACaddress, setMACaddress] = useState('');
    const [os, setOs] = useState('');
    const [osVersion, setOsVersion] = useState('');
    const [osBuild, setOsBuild] = useState('');
    const [osActivationStatus, setOsActivationStatus] = useState('');
    const [MSofficeVersion, setMSofficeVersion] = useState('');
    const [MSofficeActivationStatus, setMSofficeActivationStatus] = useState('');
    const [monitorModel, setMonitorModel] = useState('');
    const [monitorSerialno, setMonitorSerialno] = useState('');
    const [monitorStatus, setMonitorStatus] = useState('');
    const [cpuModel, setCpuModel] = useState('');
    const [cpuSerialno, setCpuSerialno] = useState('');
    const [cpuStatus, setCpuStatus] = useState('');
    const [RAM, setRAM] = useState('');
    const [hardDisk, setHardDisk] = useState('');
    const [processor, setProcessor] = useState('');
    const [systemInstallDate, setSystemInstallDate] = useState('');
    const [systemWarrantyStatus, setSystemWarrantyStatus] = useState('');
    const [antiVirus, setAntiVirus] = useState('');
    const [printerModel, setPrinterModel] = useState('');
    const [printerSerialno, setPrinterSerialno] = useState('');
    const [printerStatus, setPrinterStatus] = useState('');
    const [scannerModel, setScannerModel] = useState('');
    const [scannerSerialno, setScannerSerialno] = useState('');
    const [scannerStatus, setScannerStatus] = useState('');
    const [upsMake, setUpsMake] = useState('');
    const [upsCapacity, setUpsCapacity] = useState('');
    const [upsSerialno, setUpsSerialno] = useState('');
    const [upsStatus, setUpsStatus] = useState('');
    const navigate = useNavigate();

    const handleSaveBook = () => {
        const data = {
            location,
            department,
            subSection,
            computerID,
            username,
            mobileno,
            outdated,
            computerName,
            IPaddress,
            internetAccess,
            MACaddress,
            os,
            osVersion,
            osBuild,
            osActivationStatus,
            MSofficeVersion,
            MSofficeActivationStatus,
            monitorModel,
            monitorSerialno,
            monitorStatus,
            cpuModel,
            cpuSerialno,
            cpuStatus,
            RAM,
            hardDisk,
            processor,
            systemInstallDate,
            systemWarrantyStatus,
            antiVirus,
            printerModel,
            printerSerialno,
            printerStatus,
            scannerModel,
            scannerSerialno,
            scannerStatus,
            upsMake,
            upsCapacity,
            upsSerialno,
            upsStatus
        }
        axios
            .post('http://localhost:5000/asset/add', data)
            .then(() => {
                navigate('/assetinfo');
                alert('asset created succesfully');
            })
            .catch((error) => {
                if (error.response.status === 400) {
                    alert('Fill all required fields');
                }
                else if (error.response.status === 401) {
                    alert('ComputerID Already Exists');
                }
                else if (error.response.status === 402) {
                    alert('MAC address Already Exists');
                }
                else if (error.response.status === 403) {
                    alert('Mobile.NO Already Exists');
                }
                else if (error.response.status === 404) {
                    alert('Monitor Serial.NO Already Exists');
                }
                else if (error.response.status === 405) {
                    alert('CPU Serial.No Already Exists');
                }
                else if (error.response.status === 406) {
                    alert('Printer Serial.No Already Exists');
                }
                else if (error.response.status === 407) {
                    alert('Scanner Serial.No Already Exists');
                }
                else if (error.response.status === 408) {
                    alert('UPS Serial.No Already Exists');
                }
                else {
                    alert('An error Occured');
                    console.log(error);
                }
            });
    };
    const cancel = () => {
        navigate(`/assetinfo`);
    }
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
                    <h1>New Asset</h1>
                    <div>
                        <div className='g'>General</div>
                        <div className='general'>
                            <label>Location <a>*</a></label>
                            <input
                                className='input-create'
                                type='text'
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />

                            <label>Department<a>*</a></label>
                            <input
                                className='input-create'
                                type='text'
                                value={department}
                                onChange={(e) => setDepartment(e.target.value)}
                            />

                            <label>SubSection<a>*</a></label>
                            <input
                                className='input-create'
                                type='text'
                                value={subSection}
                                onChange={(e) => setSubSection(e.target.value)}
                            />

                            <label>ComputerID<a>*</a></label>
                            <input
                                className='input-create'
                                type='text'
                                value={computerID}
                                onChange={(e) => setComputerID(e.target.value)}
                            />

                            <label>Username<a>*</a></label>
                            <input
                                className='input-create'
                                type='text'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />



                            <label>Mobile No</label>
                            <input
                                className='input-create'
                                type='number'
                                value={mobileno}
                                onChange={(e) => setMobileno(e.target.value)}
                            />

                            <label>Outdated</label>
                            <select
                                value={outdated}
                                onChange={(e) => setOutdated(e.target.value)}
                            >
                                <option value="">Select Status</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>


                        <div className='computer-details'>
                            <div className='cd'>Computer Details</div>
                            <label>Computer Name<a>*</a></label>
                            <input
                                className='input-create'
                                type='text'
                                value={computerName}
                                onChange={(e) => setComputerName(e.target.value)}
                            />

                            <label>IP Address</label>
                            <input
                                className='input-create'
                                type='text'
                                value={IPaddress}
                                onChange={(e) => setIPaddress(e.target.value)}
                            />

                            <label>Internet Access</label>
                            <select
                                value={internetAccess}
                                onChange={(e) => setInternetAccess(e.target.value)}
                            >
                                <option value="">Select Status</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>


                            <label>MAC Address</label>
                            <input
                                className='input-create'
                                type='text'
                                value={MACaddress}
                                onChange={(e) => setMACaddress(e.target.value)}
                            />
                        </div>
                        <div className='os'>
                            <div className='o'>OS Information</div>
                            <label>OS</label>
                            <input
                                className='input-create'
                                type='text'
                                value={os}
                                onChange={(e) => setOs(e.target.value)}
                            />

                            <label>OS Version</label>
                            <input
                                className='input-create'
                                type='text'
                                value={osVersion}
                                onChange={(e) => setOsVersion(e.target.value)}
                            />

                            <label>OS Build</label>
                            <input
                                className='input-create'
                                type='text'
                                value={osBuild}
                                onChange={(e) => setOsBuild(e.target.value)}
                            />

                            <label>OS Activation Status</label>
                            <select
                                value={osActivationStatus}
                                onChange={(e) => setOsActivationStatus(e.target.value)}
                            >
                                <option value="">Select Status</option>
                                <option value="yes">Activated</option>
                                <option value="no">Not Activated</option>
                            </select>
                        </div>

                        <div className='msoffice'>
                            <div className='mof'>Ms office information</div>
                            <label>MS Office Version</label>
                            <input
                                className='input-create'
                                type='text'
                                value={MSofficeVersion}
                                onChange={(e) => setMSofficeVersion(e.target.value)}
                            />

                            <label>MS Office Activation Status</label>
                            <select
                                value={MSofficeActivationStatus}
                                onChange={(e) => setMSofficeActivationStatus(e.target.value)}
                            >
                                <option value="">Select Status</option>
                                <option value="yes">Activated</option>
                                <option value="no">Not Activated</option>
                            </select>
                        </div>

                        <div className='monitor'>
                            <div className='mo'>Monitor Information</div>
                            <label>Monitor Model<a>*</a></label>
                            <input
                                className='input-create'
                                type='text'
                                value={monitorModel}
                                onChange={(e) => setMonitorModel(e.target.value)}
                            />

                            <label>Monitor Serial No<a>*</a></label>
                            <input
                                className='input-create'
                                type='text'
                                value={monitorSerialno}
                                onChange={(e) => setMonitorSerialno(e.target.value)}
                            />

                            <label>Monitor Status</label>
                            <select
                                value={monitorStatus}
                                onChange={(e) => setMonitorStatus(e.target.value)}
                            >
                                <option value="">Select Status</option>
                                <option value="yes">Working</option>
                                <option value="no">Not Working</option>
                            </select>
                        </div>
                        <div className='cpu'>
                            <div className='c'>CPU Information</div>
                            <label>CPU Model<a>*</a></label>
                            <input
                                className='input-create'
                                type='text'
                                value={cpuModel}
                                onChange={(e) => setCpuModel(e.target.value)}
                            />

                            <label>CPU Serial No<a>*</a></label>
                            <input
                                className='input-create'
                                type='text'
                                value={cpuSerialno}
                                onChange={(e) => setCpuSerialno(e.target.value)}
                            />

                            <label>CPU Status</label>
                            <select
                                value={cpuStatus}
                                onChange={(e) => setCpuStatus(e.target.value)}
                            >
                                <option value="">Select Status</option>
                                <option value="yes">Working</option>
                                <option value="no">Not Working</option>
                            </select>
                            <label>RAM</label>
                            <input
                                className='input-create'
                                type='number'
                                value={RAM}
                                onChange={(e) => setRAM(e.target.value)}
                                placeholder='GB'
                            />

                            <label>Hard Disk</label>
                            <input
                                className='input-create'
                                type='number'
                                value={hardDisk}
                                onChange={(e) => setHardDisk(e.target.value)}
                                placeholder='GB'
                            />

                            <label>Processor</label>
                            <input
                                className='input-create'
                                type='text'
                                value={processor}
                                onChange={(e) => setProcessor(e.target.value)}
                            />
                        </div>

                        <div className='system-info'>
                            <div className='si'>System Information</div>


                            <label>System Install Date</label>
                            <input
                                className='input-create'
                                type='date'
                                value={systemInstallDate}
                                onChange={(e) => setSystemInstallDate(e.target.value)}
                            />

                            <label>System Warranty Status</label>
                            <select
                                value={systemWarrantyStatus}
                                onChange={(e) => setSystemWarrantyStatus(e.target.value)}
                            >
                                <option value="">Select Status</option>
                                <option value="yes">In Warranty</option>
                                <option value="no">Out of Warranty</option>
                            </select>

                            <label>AntiVirus</label>
                            <select
                                value={antiVirus}
                                onChange={(e) => setAntiVirus(e.target.value)}
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
                                className='input-create'
                                type='text'
                                value={printerModel}
                                onChange={(e) => setPrinterModel(e.target.value)}
                            />

                            <label>Printer Serial No</label>
                            <input
                                className='input-create'
                                type='text'
                                value={printerSerialno}
                                onChange={(e) => setPrinterSerialno(e.target.value)}
                            />

                            <label>Printer Status</label>
                            <select
                                value={printerStatus}
                                onChange={(e) => setPrinterStatus(e.target.value)}
                            >
                                <option value="">Select Status</option>
                                <option value="yes">Working</option>
                                <option value="no">Not Working</option>

                            </select>
                        </div>

                        <div className='scanner'>
                            <div className='s'>Scanner Information</div>
                            <label>Scanner Model</label>
                            <input
                                className='input-create'
                                type='text'
                                value={scannerModel}
                                onChange={(e) => setScannerModel(e.target.value)}
                            />

                            <label>Scanner Serial No</label>
                            <input
                                className='input-create'
                                type='text'
                                value={scannerSerialno}
                                onChange={(e) => setScannerSerialno(e.target.value)}
                            />

                            <label>Scanner Status</label>
                            <select
                                value={scannerStatus}
                                onChange={(e) => setScannerStatus(e.target.value)}
                            >
                                <option value="">Select Status</option>
                                <option value="yes">Working</option>
                                <option value="no">Not Working</option>

                            </select>
                        </div>

                        <div className='ups'>
                            <div className='u'>UPS Information</div>
                            <label>UPS Make</label>
                            <input
                                className='input-create'
                                type='text'
                                value={upsMake}
                                onChange={(e) => setUpsMake(e.target.value)}
                            />

                            <label>UPS Capacity</label>
                            <input
                                className='input-create'
                                type

                                ='text'
                                value={upsCapacity}
                                onChange={(e) => setUpsCapacity(e.target.value)}
                            />

                            <label>UPS Serial No</label>
                            <input
                                className='input-create'
                                type='text'
                                value={upsSerialno}
                                onChange={(e) => setUpsSerialno(e.target.value)}
                            />

                            <label>UPS Status</label>
                            <select
                                value={upsStatus}
                                onChange={(e) => setUpsStatus(e.target.value)}
                            >
                                <option value="">Select Status</option>
                                <option value="yes">Working</option>
                                <option value="no">Not Working</option>

                            </select>
                        </div>


                    </div>
                    <div className='buttons'>
                        <button className="save" onClick={handleSaveBook}>Save</button>
                        <button className='cancel' onClick={cancel}>Cancel</button>

                    </div>
                </main>
            </div>

        </div>
    )
}

export default AssetCreate