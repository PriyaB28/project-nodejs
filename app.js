const express = require('express');
const app = express();

const adminRoutes = require('./routes/admin');
const rootDir = require('./util/path');
const path = require('path');

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public'))); // path.join(__dirname, rootDir));


app.use('/admin', adminRoutes);

app.use('/', (req, res, next) => {
    console.log('In / middleware');
    res.send('<h1>Hello from express</h1>');
})


app.listen(3000, () => {
    console.log('Server started on port 3000');
})