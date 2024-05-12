require('dotenv').config();

const express = require('express');
const cors = require('cors');
const authroutes = require('./route/AuthRoutes');
const beberoutes= require('./route/bebeRoutes')
const accouchementroutes= require('./route/acouchementRoutes')
const consultationroute= require('./route/consultationRoutes')
const medicamentroute=require('./route/medicamentRoutes')
const body = require('body-parser');
const sequelize = require('./config/Database');

const http = require('http');

const port = process.env.PORT || 8080;

//express app
const app = express();
const server = http.createServer(app);
 
//midleware
app.use(cors());
app.use(body.json({limit: '50mb'}));
app.use(body.urlencoded({limit: '50mb', extended: true}));

//routes
app.use('/auth', authroutes); 
app.use('/bebe',beberoutes)
app.use('/accouchement',accouchementroutes)
app.use('/consultation',consultationroute)
app.use('/medicament',medicamentroute)

// Disable logging of SQL queries
sequelize.options.logging = false;
//connect to db
sequelize.sync().then(() => {
    server.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch((error) => {
    console.error('Database connection error:', error);
});