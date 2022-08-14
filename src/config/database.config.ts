import {Sequelize} from 'sequelize';

const user = 'yarn';
// const host = 'localhost';
const databaseName = 'salesforce';
const password = 'salesforce';
// const port = 5354;

const database = new Sequelize(databaseName, user, password, {
    storage: './database.sqlite',
    dialect: 'sqlite',
    logging: false
  });

export default database;