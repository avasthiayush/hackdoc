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



router.post('/update/beds',authCheck,(req,res) => {
    const hos =  Hospital.findOneAndUpdate(req.user,{
        bedavail1[1]:req.body.totalbeds[1];
    });
    //hos.name="xyz";
    
    //hos.bedavail2[1]=req.body.totalbeds[1];
    console.log(hos._conditions);

const doc = hos.save();

    res.render('dashboard-aman',{hospital:req.user});
    //res.redirect('/dashboard-aman',{hospital:req.user});

    //console.log(req.body);
});


router.get('/',authCheck,(req,res) => {
    res.render('dashboard-hospital',{hospital:req.user},);
});

module.exports = router;