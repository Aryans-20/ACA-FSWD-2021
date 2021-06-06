const express=require('express');
const bodyParser=require('body-parser');
const dishRouter=express.Router();
dishRouter.route('/')
.all((req,res,next)=>
{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Will send the dishes to you!');
})
.put((req,res,next)=>{
    res.end('Sorry! Put operation is not supported on /dishes');
})
.post((req,res,next)=>{
    res.end('Will add the details corresponding to dish:'+req.body.name+' and details'+req.body.description);
})
.delete((req,res,next)=>{
    res.end('Sorry! Delete operation is not supported on /dishes');
});
dishRouter.route('/:dishId')
.all((req,res,next)=>
{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Will send you the details of dishID: '+req.params.dishId);
})
.post((req,res,next)=>{
    res.end('Sorry not supported');
})
.put((req,res,next)=>{
    res.end('Will put the dish: '+req.body.name+' with details: '+req.body.description+' to dishId: '+req.params.dishId);
}).delete((req,res,next)=>{
    res.end('Will delete the dishID: '+req.params.dishId);
});
module.exports= dishRouter;