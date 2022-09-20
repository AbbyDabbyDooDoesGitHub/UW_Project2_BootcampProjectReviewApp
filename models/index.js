const User = require('./user');
const Project = require('./project');

// const User = require('/user');
// const Project = require('/project');

// Create associations
User.hasMany(Project, {
  onDelete: 'CASCADE',
  foreignKey: 'id',
});

Project.belongsTo(Project, {
  foreignKey: 'id'
});

module.exports = { User, Project };
