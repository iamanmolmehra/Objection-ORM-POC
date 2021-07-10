const express = require('express');
const app = express();
const morgan = require('morgan');

const users = require('./routes/users');

app.use(express.json());
app.use(morgan('dev'));

app.use('/user', users);

const PORT = process.env.PORT || 2022

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
}) 