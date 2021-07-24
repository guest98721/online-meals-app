const express =require("express");
const path=require("path");
const connectDB=require('./DB/Connection');
const app=express();
connectDB();
app.use(express.json({ extended: false }));
app.use('/api/userModel', require('./Api/User'));
const port=process.env.PORT ||80;
const fs=require("fs");
const bodyparser=require("body-parser");
const User = require("./DB/User");

// express specific stuff 
app.use('/static', express.static('static'));
app.use(express.urlencoded())

// pug special stuff 
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

// end points 
app.get('/',(req,res)=>{
    const con= "this is the best content on the interent so far so use it wisely"
    const params={'title':'Sai Ganesh','content' :con}
    res.status(200).render('index.pug',params);
})
// app.post('/',(req,res)=>{
//      res.status(200).render('index.pug');
// })

app.post('/',(req,res)=>{
    var mydata= new User(req.body);
    mydata.save().then(()=>{
        res.send("this item has been saved to data base")
    }).catch(()=>{
    res.status(400).send("item wasn't saved to data base") }); 
})

// start the server 
app.listen(port, ()=>{
        console.log(`the application started successfully on port ${port}`)
});