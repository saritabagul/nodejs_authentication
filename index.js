const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const db = require('./config/mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const customMware = require('./config/middleware');
const passportGoogle = require('./config/passport-google-oauth2-strategy');

const app = express();

//------------ Passport Configuration ------------//
require('./config/passport')(passport);

//------------ setup static file path------------//
app.use(express.static('./assets')); 


//------------ EJS Configuration ------------//
app.use(expressLayouts);
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
app.set('view engine', 'ejs');
app.set('views','./views');


//------------ Bodyparser Configuration ------------//
app.use(express.urlencoded({ extended: false }))

//------------ Express session Configuration ------------//
app.use(
    session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    })
);

//------------ Passport Middlewares ------------//
app.use(passport.initialize());
app.use(passport.session());

//------------ Connecting flash ------------//
app.use(flash());
app.use(customMware.setFlash);

//------------ Routes ------------//
app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));


const PORT = 8000;
app.listen(PORT, console.log(`Server running on PORT ${PORT}`));