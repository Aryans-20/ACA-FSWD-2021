const express=require('express');
const bodyParser=require('body-parser');
const leaderRouter=express.Router();
leaderRouter.route('/')
.all((req,res,next)=>
{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Will send the leaders to you!');
})
.put((req,res,next)=>{
    res.end('Sorry! Put operation is not supported on /leaders');
})
.post((req,res,next)=>{
    res.end('Will add the details corresponding to leader: '+req.body.name+' and details: '+req.body.description);
})
.delete((req,res,next)=>{
    res.end('Sorry! Delete operation is not supported on /dishes');
});
leaderRouter.route('/:leaderID')
.all((req,res,next)=>
{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Will send you the details of leaderID: '+req.params.leaderID);
})
.post((req,res,next)=>{
    res.end('Sorry not supported');
})
.put((req,res,next)=>{
    res.end('Will put the leader: '+req.body.name+' with details: '+req.body.description+' to leaderID: '+req.params.leaderID);
}).delete((req,res,next)=>{
    res.end('Will delete the leaderID: '+req.params.leaderID);
});
module.exports= leaderRouter;