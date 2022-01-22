const http=require('http');
const express=require('express');
const bodyParser=require('body-parser');
const dishRouter=require('./routes/dishRouter');
const promoRouter=require('./routes/promoRouter');
const leaderRouter=require('./routes/leaderRouter');
const app=express();
app.use(bodyParser.json());
app.use(express.static(__dirname+'/public'));
app.use('/dishes',dishRouter);
app.use('/promotions',promoRouter);
app.use('/leaders',leaderRouter);
const server=http.createServer(app);
server.listen(3000,'localhost',()=>{
    console.log(`Server listening at http://localhost:3000`);
})