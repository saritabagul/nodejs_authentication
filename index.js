const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const db = require('./config/mongoose');

const app = express();
const PORT = 8000;
app.listen(PORT, console.log(`Server running on PORT ${PORT}`));