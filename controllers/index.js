const router = require("express").Router();

const apiroutes = require("./api");

const homeRoutes = require("./homeRoutes.js");

const eventRoutes = require("./api/eventRoutes.js");

router.use("/", homeRoutes);

router.use("/api", apiroutes);

router.use("eventRoutes.js", eventRoutes);

module.exports = router;
