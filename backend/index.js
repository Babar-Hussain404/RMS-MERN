const connectToMongo = require("./db");
const express = require('express')
const cors = require('cors');

connectToMongo(); 
const app = express()
const port = 5000;

app.use(cors())
app.use(express.json())

//Available routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/bookings',require('./routes/bookings'))
app.use('/api/residences',require('./routes/residences'))


app.listen(port, () => {
  console.log(`RMS React server listening on port ${port}`)
})