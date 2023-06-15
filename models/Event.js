const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Event extends Model {}

Event.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    event_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    event_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    event_location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    event_description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    User_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Event',
  }
);

module.exports = Event;