const port = 4000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

app.use(express.json());
app.use(cors());

// Database connection with MongoDB
mongoose.connect("mongodb+srv://asdzzz004:001001001@cluster0.c4ozglx.mongodb.net/web-app")

// API Creation 
app.get('/', (req, res) => {
    res.send("Express App is running");
})

// Image Storage Engine
const storage = multer.diskStorage({
    destination: './upload/images/',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
})

const upload = multer({storage:storage})

// Creating Upload Endpoint for image
app.use('/images', express.static('upload/images'));
app.post('/upload', upload.single('product'), (req, res) => {
    res.json({
        success: 1, 
        image_url: `http:localhost:${port}/images/${req.file.filename}`
    });
})

// schema creating for user model
const Users = mongoose.model('users', {
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String
    },
    cartData:{
        type:Object
    },
    date:{
        type:Date,
        default:Date.now
    }
})

// Creating Endpoint for Registrating User
app.post('/signup', async (req, res) => {
    let check = await Users.findOne({email:req.body.email});
    if (check){
        return res.status(400).json({success:false, errors:"existing user found with same email"})
    }
    let cart = {};
    for (let i = 0; i < 300; i++){
        cart[i] = 0;
    }
    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart
    })
    await user.save();
    
    const data = {
        user:{
            id:user.id
        }
    }
    const token = jwt.sign(data,'secret');
    res.json({success:true, token});
})

// Creating Endpoint for Login User
app.post('/login', async (req,res) => {
    let user = await Users.findOne({email:req.body.email});
    if (user){
        const passCompare = req.body.password === user.password;
        if (passCompare){
            const data = {
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data,'secret');
            res.json({success:true, token});
        }
        else{
            res.json({success:false, errors:"Wrong Password"});
        }
    }
    else{
        res.json({success:false, errors:"Wrong Email Id"});
    }
})

app.listen(port, (error) => {
    if(!error) {
        console.log("Server is running on port:", port);
    } 
    else {
        console.log("Error:",error);
    }
})