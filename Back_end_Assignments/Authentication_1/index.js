var express=require('express');
var http=require('http');
var session=require('express-session');
var cookie_parser=require('cookie-parser');
var mongoose=require('mongoose');
var passportLocalMongoose=require('passport-local-mongoose');
var localStrategy=require('passport-local').Strategy;
var morgan=require('morgan');
var body_parser=require('body-parser');
var FileStore=require('session-file-store')(session);

var app=express();
app.use(body_parser.json());
app.use(morgan('dev'));

app.use(session({
    name: 'session-id',
    secret: '12345-67890-09876-54321',
    saveUninitialized: false,
    resave: false,
    store: new FileStore()
}));
function auth (req, res, next) {
    console.log(req.session);

    if (!req.session.user) {
        var authHeader = req.headers.authorization;
        if (!authHeader) {
            var err = new Error('You are not authenticated!');
            res.setHeader('WWW-Authenticate', 'Basic');                        
            err.status = 401;
            next(err);
            return;
        }
        var auth = new Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
        var user = auth[0];
        var pass = auth[1];
        if (user == 'admin' && pass == 'password') {
            req.session.user = 'admin';
            next(); // authorized
        } else {
            var err = new Error('You are not authenticated!');
            res.setHeader('WWW-Authenticate', 'Basic');
            err.status = 401;
            next(err);
        }
    }
    else {
        if (req.session.user === 'admin') {
            console.log('req.session: ',req.session);
            next();
        }
        else {
            var err = new Error('You are not authenticated!');
            err.status = 401;
            next(err);
        }
    }
}
app.use(auth);
app.use(express.static(__dirname+'/public'));
const server=http.createServer(app);
server.listen(3000,'localhost',()=>{
    console.log(`Server listening at http://localhost:3000`);
})