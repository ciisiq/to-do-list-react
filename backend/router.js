const express = require('express');
const router = express.Router();
const controller = require('./controller/controller');

router.get('/', (req, res) => {
  res.send('hello world');
});

module.exports = router;
