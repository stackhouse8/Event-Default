const router = require("express").Router();
const { User, Event } = require("../../models");

// Creating your api

//Get all events
router.get("/", (req, res) => {
  Event.findAll().then((EventData) => {
    res.json(EventData);
  });
});
router.post("/", (request, response) => {
  const incomingEvent = request.body;

  accounts.push(incomingEvent);

  response.json(Events);
});
// post
router.post("/", (req, res) => {
  Event.create(req.body).then((newEvent) => {
    res.json(err);
  });
});

module.exports = router;
