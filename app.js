const express = require('express')
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()


const app = express()

app.use(express.static('./public'))
app.use(express.json())


app.use('/api/v1/tasks', tasks)


const PORT = 3008

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, console.log('server started'))
    }catch (err) {
        console.log(err)
    }
};

start()

