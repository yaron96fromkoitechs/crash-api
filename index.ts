import express, { Express } from 'express'
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express()

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})