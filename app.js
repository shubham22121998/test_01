const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const route = require('./src/routes')
dotenv.config()
const app = express();

let port = 8000

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

let DB = `mongodb+srv://atulc204:atul2411@cluster0.jcqqfxd.mongodb.net/test_001?retryWrites=true&w=majority`
console.log("🚀 ~ file: server.js ~ line 10 ~ DB", DB)

mongoose.connect(DB, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false
}).then(() => {
    console.log("mongodb connected successfully")
}).catch(error => {
    console.log(error.message)
})




app.use('/', route)

app.use((req, res, next) => {
    const error = new Error("api name not found")

    res.status(400).json({
        message: 'api name not found'
    })
    next()
})


app.listen(port, () => {
    console.log(`server listing on ${port}`)
})