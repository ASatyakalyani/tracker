const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const app = express()
const Routes = require("./routes/route.js")
const PORT = 5000
MONGO_URL = 'mongodb+srv://Harshini_Togaru:Harshi123@cluster0.ilox2h5.mongodb.net/DriveReady1?retryWrites=true&w=majority'
dotenv.config();
app.use(express.json({ limit: '10mb' }))
app.use(cors())
mongoose
    .connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log("NOT CONNECTED TO NETWORK", err))

app.use('/', Routes);

app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`)
})