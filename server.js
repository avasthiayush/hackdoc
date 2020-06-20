const express = require('express');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth-routes');
const dashboardRoutes = require('./routes/dashboard-routes');
const passportSetup = require('./config/passport.setup');
const path = require('path');
const cookieSession = require('cookie-session');
const methodOverride = require('method-override');
const bodyParser= require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.set('view engine','ejs');
// app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static(path.join(__dirname + '/Public')));
// app.set('views', path.join(__dirname, 'views'));


//db connection
const uri = process.env.dbURL;
mongoose.connect(uri, {useNewUrlParser: true ,useUnifiedTopology: true}, () =>{
    console.log('Connected to db');
})

mongoose.set('useFindAndModify', false);
const Hospital = require('./models/hospital-model');


app.get('/',function(req,res)
{
    res.render('home');
});

// app.get('/team',function(req,res){
//     res.render('team');
// });

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
});