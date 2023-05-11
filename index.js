const express = require('express');
const app = express()
const mongoose = require('mongoose');
const morgan = require('morgan');
const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;
const  { User } = require("./models/userPatient");




//database connection
const dbURI= 'mongodb+srv://shaked:12345@atlascluster.ozvlola.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true , useUnifiedTopology: true})
    .then(()=>//listen to port
      
      app.listen(port, hostname, () => {
      console.log("You successfully connected to MongoDB!"),
      console.log(`Server running at http://${hostname}:${port}/`);
      }))
    .catch((err)=>console.log('Didnt succeed to connect',err))



app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

//register view engine
app.set('view engine','ejs');


//Add patient form
app.get('/addPatient',(req,res) =>{
  res.render('addPatient');
})

//save 
app.post('/addPatient',(req,res)=>{
  //console.log(req.body);
  const user = new User(req.body);
  user.save()
    .then((result) =>{
      console.log("item saved to database");
      res.render('home');
      console.log(result)
      //res.redirect('/addPatient');
    })
    .catch((err) =>{
      console.log("unable to save to database");
      console.log(err)
    })


})


//home page
app.get('/',(req,res) =>{
  res.render('home');
})


//page with button of send and post from tadabase
app.post('/search',(req,res) =>{
  res.render('viewSearch');
  //console.log(req.body); // user input
  User.find(req.body).then((res) => {
    //if succeded do find this block of code
    console.log("Details of the patient:")
    console.log(res);
  }).catch((err) => {
    //catch error
    console.log(err);
  });
})

app.get('/search',(req,res) =>{
  res.render('search');

})

//view details of the patient
app.get('/viewSearch',(req,res) =>{
  res.render('viewSearch');
})

app.post('/viewSearch',(req,res) =>{
})

//for all the false routes
app.get('*', (req, res) => {
  res.render('404');
})




