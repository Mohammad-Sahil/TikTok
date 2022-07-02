const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000


app.get('/', (req,res) => {
    res.status(200).send('Hello')
})

app.listen(PORT, (req,res) => {
    console.log(`serer is running on localhost:${PORT}`)
})