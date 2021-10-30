const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3001;

app.use(require('./routes'));
app.use(express.urlencoded({ extended: true })); // Facilita envio de arquivos
app.use(morgan('dev'));


app.listen(port, () => console.log(`app listening on ${port} port!`));