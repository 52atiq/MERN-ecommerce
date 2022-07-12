const express = require('express');
const dotenv = require('dotenv');
// import colors from 'colors'
const colors = require('colors')
const connectDB = require('./config/db')
const products = require('./data/products')

// import express from 'express'
// import dotenv from 'dotenv'
// import products from './data/products'

dotenv.config()

connectDB()

const app = express();
// import {  useParams } from 'react-router-dom';

app.get('/' , (req, res) =>{
    res.send('Api is Running...')
})

app.get('/api/products', (req, res)=>{
    res.json(products)
})

app.get('/api/products/:id', (req,res) =>{
    // const id = req.params.id;
    // let { id } =useParams();
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
})

const PORT = process.env.PORT || 5000

app.listen(PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))