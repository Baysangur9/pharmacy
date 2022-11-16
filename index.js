const express = require('express')
const mongoose = require('mongoose')
const port = 3000
const app = express()

app.use(express.json())
app.use(require('./routes'))
mongoose.connect('mongodb+srv://bechan:bechan999@cluster0.vm2r106.mongodb.net/pharmacy') 

app.listen( port, () => console.log('Server started on port ' + port))
