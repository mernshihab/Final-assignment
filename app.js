const express = require('express');
const app = new express();

const cors = require('cors');
const helmet = require('helmet');
const hpp = require('hpp');
const rateLimit = require("express-rate-limit");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const router = require('./src/routes/api');


app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(hpp());

const limiter = rateLimit({
    windowMs: 1000 * 60 *15,
    standardHeaders: 'draft-6',
    legacyHeaders: false,
    limit: 50
});
app.use(limiter);


const config = require('./config.js');
mongoose.connect(config.dbUri)
    .then(res => console.log('DB Connected'))
    .catch(err => console.log(err));
app.use('/api/v1', router);
app.use('*', (req, res) => {
    res.json({status: 'Not Found!', message: 'API unavailable right now.'});
})


module.exports = app;
