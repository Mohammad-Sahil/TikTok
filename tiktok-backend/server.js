import express from 'express'
import mongoose from 'mongoose';
const app = express()
const PORT = process.env.PORT || 8000;
import data from './data.js';
import tiktokCollsn from './dbModel.js';

//dbConfig
const connection_url = 'mongodb+srv://admin:inhmDzmQvm2ZporT@cluster0.iurfwis.mongodb.net/tiktok?retryWrites=true&w=majority';

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
})

// middlewares
app.use(express.json());
// app.use(express.urlencoded({extended: false}));
app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"),
    res.setHeader("Access-Control-Allow-Headers", "*"),
    next()
})

//API end points
app.get('/', (req,res) => {
    res.status(200).send('Hello')
})
app.get('/v1/data', (req,res) => {
    res.status(200).send(data)
})
app.post('/v2/data', async (req,res) => {
    try {
        const videoDoc = req.body;
        const tiktok = tiktokCollsn(videoDoc);
        const tiktokSave = await tiktok.save();
        console.log(`this is save data ${tiktokSave}`);
        res.status(201).send(tiktokSave)
    } catch (error){
        console.log(error)
    }
})
app.get('/v2/data', async (req,res) => {
    try {
        const videoDocs = await tiktokCollsn.find()
        console.log(`this is save data ${videoDocs}`);
        res.status(200).send(videoDocs)
    } catch (error){
        console.log(error)
    }
})
// app listning
app.listen(PORT, (req,res) => {
    console.log(`serer is running on localhost:${PORT}`)
})