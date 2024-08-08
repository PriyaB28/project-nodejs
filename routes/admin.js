const express = require('express');
const router = express.Router();
const path = require('path');

const rootDir = require('../util/path');

router.get('/add-product', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'add-food.html'));
}); 

router.post('/add-product', (req, res) => {
    console.log(req.body);
    res.redirect('/');
});


module.exports = router