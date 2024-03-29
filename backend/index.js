const express = require('express'); //import

const cors = require('cors');
const app = express();  //initialize

const userRouter = require('./router/userRouter');
const contactRouter = require('./router/contactRouter');    
const brandRouter = require('./router/brandRouter');

//middleware
app.use(cors({
    origin : 'http://localhost:3000'
}));

//conver js to json
app.use(express.json());
app.use('/user', userRouter);
app.use('/contact', contactRouter);
app.use('/brand', brandRouter);

const port = 5000;

//start express server

app.get('/',(req , res) => {
    res.send('response from express');
});

app.get('/add', (req , res) => {
    res.send('add response from express')
});

app.listen(port, () => {console.log('express server started')});