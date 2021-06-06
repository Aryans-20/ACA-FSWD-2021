const express=require('express');
const bodyParser=require('body-parser');
const promoRouter=express.Router();
promoRouter.route('/')
.all((req,res,next)=>
{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Will send the promotions to you!');
})
.put((req,res,next)=>{
    res.end('Sorry! Put operation is not supported on /promotions');
})
.post((req,res,next)=>{
    res.end('Will add the details corresponding to promotions:'+req.body.name+' and details'+req.body.description);
})
.delete((req,res,next)=>{
    res.end('Sorry! Delete operation is not supported on /dishes');
});
promoRouter.route('/:promoID')
.all((req,res,next)=>
{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Will send you the details of promoID: '+req.params.promoID);
})
.post((req,res,next)=>{
    res.end('Sorry not supported');
})
.put((req,res,next)=>{
    res.end('Will put the promotions: '+req.body.name+' with details: '+req.body.description+' to promoID: '+req.params.promoID);
}).delete((req,res,next)=>{
    res.end('Will delete the promoID: '+req.params.promoID);
});
module.exports= promoRouter;