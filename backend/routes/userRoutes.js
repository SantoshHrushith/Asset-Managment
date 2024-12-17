const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.js'); 

const router = express.Router();

// Add new User
router.post('/register', async (req, res) => {
    const { userid, password, role } = req.body;

    if (!userid || !password) {
        return res.status(400).json({ message: 'User ID and password are required' });
    }

    const userExists = await User.findOne({ userid });
    if (userExists) {
        return res.status(401).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ userid, password: hashedPassword, role });
    try {
        await user.save();
        res.status(201).json({ message: 'User registered' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

// User Login
router.post('/login', async (req, res) => {
    const { userid, password } = req.body;

    if (!userid || !password) {
        return res.status(400).json({ message: 'User ID and password are required' });
    }

    const user = await User.findOne({ userid });
    if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, 'your_jwt_secret', { expiresIn: '.5h' });

    res.json({ token, role: user.role });
});

// All Users Info
router.get('/info', async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

//Delete User
router.delete('/delete/:id',async (req,res) =>{
    try{
        const {id} = req.params;
        const result = await User.findByIdAndDelete(id);
        if(!result){
            return res.status(404).json({message: 'User not found'});
        }
        return res.status(200).send({ message: 'User deleted succesfully' });
    }catch(error){
        console.log(error);
        res.status(500).send({message:error.message});
    }
});

module.exports = router;
