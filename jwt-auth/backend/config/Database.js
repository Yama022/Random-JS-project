import { Sequeling } from 'sequelize';

const db = new Sequeling('auth', 'root', '', {
  host: "localhost",
  dialect: "mysql",
});

export default db;
