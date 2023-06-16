const router = require("express").Router();
const { User, Event } = require("../models");

// GET all galleries for homepage
router.get("/", async (req, res) => {
  try {
    // Get all users, sorted by name
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      order: [["name", "ASC"]],
    });

    // Serialize user data so templates can read it
    const users = userData.map((project) => project.get({ plain: true }));

    // Pass serialized data into Handlebars.js template
    res.render("homepage", { users });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/events", async (req, res) => {
  try {
    const eventData = await Event.findAll({
      include: [
        {
          model: Event,
          attributes: [
            "event_name",
            "event_date",
            "event_location",
            "event_description",
          ],
        },
      ],
    });

    const events = eventData.map((event) => event.get({ plain: true }));

    res.render("homepage", {
      events,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res)=> {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


module.exports = router;
