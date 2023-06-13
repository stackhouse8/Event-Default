const router = require('express').Router();
const path = require('path');

const events = [
    {
        event_name: 'Adele concert',
        event_date: '07/14/23',
        event_location: 'Chicago, Illinois',
        event_description: 'Going to listen to Adele in July.',

    },
    {
        event_name: 'Golfing',
        event_date: '08/05/23',
        event_location: 'Pebble, Beach',
        event_description: 'Going golfing at Pebble Beach because I am loaded.',

    },
    {
        event_name: 'Brewers Game',
        event_date: '06/27/23',
        event_location: 'Milwaukee, Wisconsin',
        event_description: 'Going to listent to Adele in july.',

    },
    {
        event_name: 'Baseball Game',
        event_date: '06/15/23',
        event_location: 'Inianapolis, Indiana',
        event_description: 'Summer league baseball game this week.',

    },
    {
        event_name: 'Family Reunion',
        event_date: '06/27/23',
        event_location: 'La Crosse, Wisconsin',
        event_description: 'Going to a family reunion on the 27th.',

    },
];

router.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

module.exports = router;
