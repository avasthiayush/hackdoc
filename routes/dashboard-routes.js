const router = require('express').Router();
const Hospital = require('../models/hospital-model');


const authCheck = (req,res,next) => {
    if(!req.user){
        //if user is not logged in
        res.redirect('/auth/login');
    }
    else{
        next();
    }
};

router.get('/',authCheck,(req,res) => {
    res.render('dashboard-hospital',{hospital:req.user},);
});

module.exports = router;