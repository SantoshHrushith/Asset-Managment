import React, { useState, useEffect } from 'react';
import { Link,} from 'react-router-dom';
import axios from 'axios';
import Logout from './Logout';

const ClientHome = () => {
    const [totalAsset, setTotalAsset] = useState();
    const [assetCount, setAssetCount] = useState();
    const [userCount, setUserCount] = useState();
    const [monitorCount, setMonitorCount] = useState();
    const [workingMonitorCount, setWorkingMonitorCount] = useState();
    const [cpuCount, setCPUCount] = useState();
    const [workingCpuCount, setWorkingCpuCount] = useState();
    const [printerCount, setPrinterCount] = useState();
    const [workingPrinterCount, setWorkingPrinterCount] = useState();
    const [scannerCount, setScannerCount] = useState();
    const [workingScannerCount, setWorkingScannerCount] = useState();
    const [upsCount, setUpsCount] = useState();
    const [workingUpsCount, setWorkingUpsCount] = useState();



    const fetchUserCount = async () => {
        try {
            axios
                .get('http://localhost:5000/user/info')
                .then((response) => {
                    setUserCount(response.data.length);

                })

        } catch (error) {
            console.error('Error fetching user count:', error);
        }
    };

    const fetchAssetCount = async () => {
        try {
            axios
                .get('http://localhost:5000/asset/info')
                .then((response) => {
                    setAssetCount(response.data.length);
                })


        } catch (error) {
            console.error('Error fetching asset count:', error);
        }
    };

    const fetchAboutAll = async () => {
        try {
            axios
                .get('http://localhost:5000/asset/info')
                .then((response) => {
                    let totalAsset = 0;
                    let monitorCount = 0;
                    let workingMonitorCount = 0;
                    let cpuCount = 0;
                    let workingCpuCount = 0;
                    let printerCount = 0;
                    let workingPrinterCount = 0;
                    let scannerCount = 0;
                    let workingScannerCount = 0;
                    let upsCount = 0;
                    let workingUpsCount = 0;

                    response.data.forEach(asset => {
                        if (asset.monitorModel) {
                            monitorCount++;
                            if (asset.monitorStatus === 'yes') {
                                workingMonitorCount++;
                            }
                        }
                        if (asset.cpuModel) {
                            cpuCount++;
                            if (asset.cpuStatus === 'yes') {
                                workingCpuCount++;
                            }
                        }
                        if (asset.printerModel) {
                            printerCount++;
                            if (asset.printerStatus === 'yes') {
                                workingPrinterCount++;
                            }
                        }
                        if (asset.scannerModel) {
                            scannerCount++;
                            if (asset.scannerStatus === 'yes') {
                                workingScannerCount++;
                            }
                        }
                        if (asset.upsMake) {
                            upsCount++;
                            if (asset.upsStatus === 'yes') {
                                workingUpsCount++;
                            }
                        }

                    });
                    totalAsset = monitorCount + cpuCount + printerCount + scannerCount + upsCount;
                    setTotalAsset(totalAsset);
                    setMonitorCount(monitorCount);
                    setWorkingMonitorCount(workingMonitorCount);
                    setCPUCount(cpuCount);
                    setWorkingCpuCount(workingCpuCount);
                    setPrinterCount(printerCount);
                    setWorkingPrinterCount(workingPrinterCount);
                    setScannerCount(scannerCount);
                    setWorkingScannerCount(workingScannerCount);
                    setUpsCount(upsCount);
                    setWorkingUpsCount(workingUpsCount);
                })


        } catch (error) {
            console.error('Error fetching asset count:', error);
        }
    }

    useEffect(() => {
        fetchUserCount();
        fetchAssetCount();
        fetchAboutAll();
    }, []);

    return (
        <div>
            <nav className='navbar'>
                <div className='logoHead'>
                    <img src='imgsymbol.png' alt='s' className='logo' />
                    <h1>VPA Asset Managment</h1>
                </div>
                <Logout />
            </nav>
            <div className='container'>
                <nav className='side-bar'>
                    <Link to={`/clienthome`}>Home</Link>
                    <Link to={`/assetinfoclient`}>Assets</Link>
                </nav>
                <main className='content'>
                    <div className='total-asset'>Total Assets: {totalAsset}</div>
                    <div className='users'>
                        <div className='asset'>Asset Users:{assetCount}</div>
                        <div className='total-user'>Users: {userCount}</div>
                    </div>
                    <div className='row1'>

                        <div className='monitor-i'>
                            <div className='name'>
                                MONITOR
                            </div>
                            <div className='co'>

                                <div>Total:{monitorCount}</div>
                                <div>Working:{workingMonitorCount}</div>
                            </div>
                        </div>
                        <div className='cpu-i'>
                            <div className='name'>
                                CPU
                            </div>
                            <div className='co'>
                                <div>Total:{cpuCount}</div>
                                <div>Working:{workingCpuCount}</div>
                            </div>

                        </div>
                        <div className='printer-i'>
                            <div className='name'>
                                Printer
                            </div>
                            <div className='co'>

                                <div>Total: {printerCount}</div>
                                <div>Working: {workingPrinterCount}</div>
                            </div>
                        </div>
                        <div className='scanner-i'>
                            <div className='name'>
                                Scanner
                            </div>
                            <div className='co'>

                                <div>Total: {scannerCount}</div>
                                <div>Working: {workingScannerCount}</div>
                            </div>
                        </div>
                        <div className='ups-i'>
                            <div className='name'>
                                UPS
                            </div>
                            <div className='co'>

                                <div>Total: {upsCount}</div>
                                <div>Working: {workingUpsCount}</div>
                            </div>
                        </div>
                    </div>

                </main>
            </div>
        </div>
    );
};

export default ClientHome;
