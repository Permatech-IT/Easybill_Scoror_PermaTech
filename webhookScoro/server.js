const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/', express.static(__dirname));

const uri = process.env.ATLAS_URI;


const mainRouter = require('./routes/main');
const easyBillRouter = require('./routes/easyBill');

app.use('/', mainRouter);
app.use('/easyBill', easyBillRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});