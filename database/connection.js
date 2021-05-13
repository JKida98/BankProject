
import Sequelize from 'sequelize';
import {environment} from '../env.js'
const sequelize = new Sequelize(environment.database, environment.user, environment.password, {
  host: environment.host,
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

// Or you can simply use a connection uri
// const sequelize = new Sequelize(`postgres://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`);

export default sequelize;