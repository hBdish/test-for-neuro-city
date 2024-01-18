import {Sequelize} from 'sequelize'
import {ENV} from "./data";


const db = new Sequelize(
  `postgres://${ENV.DB_USER}:${ENV.DB_PASSWORD}@${ENV.DB_HOST}:${ENV.DB_PORT}/${ENV.DN_NAME}`,
  {
    dialect: 'postgres',
  },
)

export {db}