const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.options('*',cors());

//middleware
app.use(bodyParser.json());
app.use(express.json());

//app.use(authJwt());

//Routes
const categoryRoutes = require('./routes/category')



app.use("/api/category", categoryRoutes);


// database
mongoose.connect(process.env.CONNECTION_STRING)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err.message));


//server
app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})