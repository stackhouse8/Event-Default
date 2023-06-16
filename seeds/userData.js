const { User } = require("../models");
const userdata = [
  {
    name: "Mitchell",
    email: "mitchstack9@gmail.com",
    password: "puppies",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
