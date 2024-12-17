const express = require('express');
const Asset = require('../models/asset.js');

const router = express.Router();

//Add new Asset
router.post('/add', async (req, res) => {
    const {
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
        scannerModel,
        scannerSerialno,
        scannerStatus,
        upsMake,
        upsCapacity,
        upsSerialno,
        upsStatus

    } = req.body;

    const asset = new Asset({
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
        scannerModel,
        scannerSerialno,
        scannerStatus,
        upsMake,
        upsCapacity,
        upsSerialno,
        upsStatus
    });

    if (!location || !department || !subSection || !computerID || !username || !computerName || !monitorModel || !monitorSerialno || !cpuModel || !cpuSerialno) {
        return res.status(400).json({ message: 'Location, subsection, computerID and username required' });
    }


    if (await Asset.findOne({ computerID})) {
        console.log('Computer ID already exists');
        return res.status(401).json({ message: 'Computer ID already exists' });
    }

    if (await Asset.findOne({ MACaddress})) {
        console.log('MAC Address already exists');
        return res.status(402).json({ message: 'MAC Address already exists' });
    }

    if (await Asset.findOne({ mobileno})) {
        console.log('Mobile number already exists');
        return res.status(403).json({ message: 'Mobile number already exists' });
    }

    if (await Asset.findOne({ monitorSerialno})) {
        console.log('Monitor Serial Number already exists');
        return res.status(404).json({ message: 'Monitor Serial Number already exists' });
    }

    if (await Asset.findOne({ cpuSerialno})) {
        console.log('CPU Serial Number already exists');
        return res.status(405).json({ message: 'CPU Serial Number already exists' });
    }

    if (await Asset.findOne({ printerSerialno }) && printerSerialno) {
        console.log('Printer Serial Number already exists');
        return res.status(406).json({ message: 'Printer Serial Number already exists' });
    }

    if (await Asset.findOne({ scannerSerialno }) && scannerSerialno) {
        console.log('Scanner Serial Number already exists');
        return res.status(407).json({ message: 'Scanner Serial Number already exists' });
    }

    if (await Asset.findOne({ upsSerialno }) && upsSerialno) {
        console.log('UPS Serial Number already exists');
        return res.status(408).json({ message: 'UPS Serial Number already exists' });
    }



    try {
        await asset.save();
        res.status(201).json({ message: 'Asset registered' })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }

});

//All Assets Info
router.get('/info', async (req, res) => {
    try {
        const assets = await Asset.find({});
        res.status(200).json(assets);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});


//Asset Info By ID
router.get('/info/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const asset = await Asset.findById(id);
        return res.status(200).json(asset);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

//Edit Asset
router.put('/edit/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const {
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
            scannerModel,
            scannerSerialno,
            scannerStatus,
            upsMake,
            upsCapacity,
            upsSerialno,
            upsStatus

        } = req.body;
        if (
            !location ||
            !department ||
            !subSection ||
            !computerID ||
            !username ||
            !computerName ||
            !IPaddress ||
            !MACaddress ||
            !os ||
            !osVersion ||
            !osBuild ||
            !MSofficeVersion ||
            !monitorModel ||
            !monitorSerialno
        ) {
            return res.status(400).send({
                message: 'Send all required fileds'
            })
        }


        if (!location || !department || !subSection || !computerID || !username) {
            return res.status(409).json({ message: 'Location, subsection, computerID and username required' });
        }


        if (await Asset.findOne({ computerID, _id: { $ne: id } })) {
            console.log('Computer ID already exists');
            return res.status(401).json({ message: 'Computer ID already exists' });
        }

        if (await Asset.findOne({ MACaddress, _id: { $ne: id } })) {
            console.log('MAC Address already exists');
            return res.status(402).json({ message: 'MAC Address already exists' });
        }

        if (await Asset.findOne({ mobileno, _id: { $ne: id } })) {
            console.log('Mobile number already exists');
            return res.status(403).json({ message: 'Mobile number already exists' });
        }

        if (await Asset.findOne({ monitorSerialno, _id: { $ne: id } })) {
            console.log('Monitor Serial Number already exists');
            return res.status(404).json({ message: 'Monitor Serial Number already exists' });
        }

        if (await Asset.findOne({ cpuSerialno, _id: { $ne: id } })) {
            console.log('CPU Serial Number already exists');
            return res.status(405).json({ message: 'CPU Serial Number already exists' });
        }

        if (await Asset.findOne({ printerSerialno, _id: { $ne: id } }) && printerSerialno) {
            console.log('Printer Serial Number already exists');
            return res.status(406).json({ message: 'Printer Serial Number already exists' });
        }

        if (await Asset.findOne({ scannerSerialno, _id: { $ne: id } }) && scannerSerialno) {
            console.log('Scanner Serial Number already exists');
            return res.status(407).json({ message: 'Scanner Serial Number already exists' });
        }

        if (await Asset.findOne({ upsSerialno, _id: { $ne: id } }) && upsSerialno) {
            console.log('UPS Serial Number already exists');
            return res.status(408).json({ message: 'UPS Serial Number already exists' });
        }


        const result = await Asset.findByIdAndUpdate(id, req.body);

        if (!result) {
            return res.status(404).json({ message: 'Asset not found' });
        }

        return res.status(200).send({ message: 'Asset updated succesfully' });

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

//Delete Asset
router.delete('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Asset.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ message: 'Asset not found' });
        }
        return res.status(200).send({ message: 'Asset deleted succesfully' });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    }
});

//Search Asset by Department
router.get('/info/department/:department', async (req, res) => {
    try {
        const { department } = req.params;
        const assets = await Asset.findByDepartment(department);
        if (!assets || assets.length === 0) {
            return res.status(404).json({ message: 'No assets found with that Department.' });
        }
        return res.status(200).json(assets);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

module.exports = router;