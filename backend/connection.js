const mongoose = require('mongoose');
const  url="mongodb+srv://akanksha:mmm@cluster0.a8c86hy.mongodb.net/mynewdatabase?retryWrites=true&w=majority&appName=Cluster0"

//asynchronous functions  - return promise
mongoose.connect(url)

.then((result) => {
    console.log("connected");
})
.catch((err) => {
    console.log(err);
    
});

module.exports = mongoose;


