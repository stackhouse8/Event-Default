const router = require('express').Router();
const path = require('path');

router.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

module.exports = router;
