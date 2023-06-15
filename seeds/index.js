const sequelize = require('../config/connection');
const seedEvents = require('./eventSeeds');
const seedUsers = require('./userSeeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedEvents();

  await seedUsers();

  process.exit(0);
};

seedAll();