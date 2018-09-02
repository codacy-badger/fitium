import Sequelize from 'sequelize';

const sequelize = new Sequelize('fitium', 'postgres', 'postgres', {
  dialect: 'postgres',
  define: {
    underscored: true,
  },
});

const models = {};

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
