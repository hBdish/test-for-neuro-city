import 'dotenv/config'
import express from "express";
import cors from 'cors'
import cookieParser from 'cookie-parser'

import {ENV} from "./common";
import {router} from "./router";
import {db, TokenModel, UserModel} from './db'
import errorMiddleware from "./common/middlewares/error-middleware";
import bodyParser from "body-parser";

const app = express()

// app.use(express.json())
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors({
  credentials: true,
  origin: 'http://localhost:5173'
}))
app.use('/api/v1', router)
app.use(errorMiddleware)

const start = async () => {
  try {
    app.listen(ENV.PORT, () => console.log(`server start on ${ENV.PORT} port`))
  } catch (e) {
    console.log(e)
  }

  try {
    await db.authenticate()
    await UserModel.sync()
    await TokenModel.sync()

    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

start().catch(console.log)