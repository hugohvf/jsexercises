const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require("require-dir");
 
// Iniciando o App
const app = express();
app.use(express.json()); // Permite que envie dados para a aplicaão em formatojason pelo Insomnia
app.use(cors());

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', 
{ useNewUrlParser: true }, 
{ useUnifiedTopology: true }
);
requireDir('./src/models/');


// Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);