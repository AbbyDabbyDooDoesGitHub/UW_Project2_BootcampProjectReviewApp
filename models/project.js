const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model {}

Project.init(
  {
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    userstory: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    preview: {
      type: DataTypes.STRING,
      allowNull: false
      // add a validator for URL
    },
    repoLink: {
      type: DataTypes.STRING,
      allowNull: false
      // add a validator for URL
    },
    appLink: {
      type: DataTypes.STRING,
      allowNull: false
        // add a validator for URL
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'project',
  }
);

module.exports = Project;
