import Sequelize from 'sequelize';

const sequelize = new Sequelize('fitium', 'postgres', 'postgres', {
  dialect: 'postgres',
  define: {
    underscored: true,
  },
});

const models = {
  User: sequelize.import('./users/user.model'),
};

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
