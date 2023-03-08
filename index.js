const express = require('express')
const dotenv = require('dotenv');

dotenv.config();

const app = express()

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})