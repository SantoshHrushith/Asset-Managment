const mongoose = require('mongoose');

const assetSchema = new mongoose.Schema({
    location: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true,
    },
    subSection: {
        type: String,
        required: true,
    },
    computerID: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,

    },
    mobileno: {
        type: String,
        unique: true
    },
    outdated: {
        type: String,
        enum: ['yes', 'no',''],
        default: 'no'
    },
    computerName: {
        type: String,
        required: true
    },
    IPaddress: {
        type: String,
    },
    internetAccess: {
        type: String,
        enum: ['yes', 'no',''],
        default: 'no'
    },
    MACaddress: {
        type: String,
        unique: true
    },
    os: {
        type: String,
    },
    osVersion: {
        type: String,
    },
    osBuild: {
        type: String,
    },
    osActivationStatus: {
        type: String,
        enum: ['yes', 'no',''],
        default: 'no'
    },
    MSofficeVersion: {
        type: String,
    },
    MSofficeActivationStatus: {
        type: String,
        enum: ['yes', 'no',''],
        default: 'no'
    },
    monitorModel: {
        type: String,
        requires:true,
    },
    monitorSerialno: {
        type: String,
        unique: true,
        required: true
    },
    monitorStatus: {
        type: String,
        enum: ['yes', 'no',''],
        default: 'no'
    },
    cpuModel: {
        type: String,
        required:true
    },
    cpuSerialno: {
        type: String,
        required:true

    },
    cpuStatus: {
        type: String,
        enum: ['yes', 'no',''],
        default: 'yes'
    },
    RAM: {
        type: Number,

    },
    hardDisk: {
        type: Number

    },
    processor: {
        type: String

    },
    systemInstallDate: {
        type: String,
        default: ''
    },
    systemWarrantyStatus: {
        type: String,
        enum: ['yes', 'no',''],
        default: 'no'
    },
    antiVirus: {
        type: String,
        enum: ['yes', 'no',''],
        default: 'no'

    },
    printerModel: {
        type: String,
        default: ''

    },
    printerSerialno: {
        type: String,
        default:''
    },
    printerStatus:{
        type: String,
        enum: ['yes', 'no',''],
        default: ''
    },
    scannerModel: {
        type: String,
        default: ''


    },
    scannerSerialno: {
        type: String,
        default: ''

    },
    scannerStatus: {
        type: String,
        enum: ['yes', 'no',''],
        default: ''

    },
    upsMake: {
        type: String,
        default: ''


    },
    upsCapacity: {
        type: String,
        default: ''


    },
    upsSerialno: {
        type: String,
        default: ''

    },
    upsStatus: {
        type: String,
        enum: ['yes', 'no',''],
        default: ''
    }

});

assetSchema.statics.findByDepartment = function (department) {
    return this.find({ department: new RegExp(department, 'i') });
};
const Asset = mongoose.model('Asset',assetSchema);


module.exports = Asset;