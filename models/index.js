const User = require('./User');
const Project = require('./Project');

// Create associations
User.hasMany(Project, {
  onDelete: 'CASCADE',
  foreignKey: 'id',
});

Project.belongsTo(Project, {
  foreignKey: 'id'
});

module.exports = { User, Project };
