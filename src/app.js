const express = require('express');
const mongoose = require('mongoose');

const TodosRoutes = require('./routes/todos')

const PORT = 8088;
const HOST = '0.0.0.0';
const DB_CONNECTION = 'mongodb://mongodb:27017/todo';

const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/todos', TodosRoutes);

const start = async () => {
    console.log(`Running on http://${HOST}:${PORT}`);

    try { await mongoose.connect(DB_CONNECTION,{ useNewUrlParser: true, useUnifiedTopology: true, }); }
    catch(e){ console.error('DB_ERROR:', e); }
}

app.listen(PORT, HOST, start);