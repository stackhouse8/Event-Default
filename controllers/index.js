const router = require('express').Router();

const dishRoutes = require('./dish-routes.js');

router.use('/', dishRoutes);

module.export = router;
