const User = require('./User');
const Event = require('./Event.js')

User.hasMany(Event, {
    foreignKey: 'User_id'
});

Event.belongsTo(User, {
    foreignKey: 'User-id'
})


module.exports = { User, Event };
