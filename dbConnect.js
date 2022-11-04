const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://adminrahul:rahulbhai@cluster0.cl4k7hi.mongodb.net/Expense_Tracker', {useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;

connection.on('error', err => console.log(err));

connection.on('connected', () => console.log('Mongo Db Connection Successfull'));
