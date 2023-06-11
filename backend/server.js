const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const connectDb = require("./config/connectDB")

const app= express();


//For env file
dotenv.config();

//connect to Db
connectDb()

app.use(cors())
app.use(express.json())


app.use('/api/user', require('./routes/userRoutes'));
app.use("/api/car", require("./routes/carRoutes") )


app.listen('5050',()=>{
    console.log("Server is listening on Port 5050")
})