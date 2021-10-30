require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
const port = 3001;

/*
  Database setup
*/
mongoose.connect('mongodb://localhost:27017/upload', {
  useNewUrlParser: true,
});

app.use(require('./routes'));
app.use(express.urlencoded({ extended: true })); // Facilita envio de arquivos
app.use(morgan('dev'));


app.listen(port, () => console.log(`app listening on ${port} port!`));