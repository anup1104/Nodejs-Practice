const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');


const connectDB = require('./config/connectDB')

const taskRoute = require('./routes/tasks.route');


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/api/task',taskRoute);



app.listen(process.env.PORT,()=>{
    console.log("Server is listening on port:", process.env.PORT);
    connectDB();
})
