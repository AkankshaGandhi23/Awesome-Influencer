const express = require('express'); //import

const cors = require('cors');
const app = express();  //initialize

const postRouter = require('./router/userRouter');

//middleware
app.use(cors({
    origin : 'http://localhost:3000'
}));

//conver js to json
app.use(express.json());
app.use('/post', userRouter);

const port = 5000;

//start express server

app.get('/',(req , res) => {
    res.send('response from express');
});

app.get('/add', (req , res) => {
    res.send('add response from express')
});

app.listen(port, () => {console.log('express server started')});