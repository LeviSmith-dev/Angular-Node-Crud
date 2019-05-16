let app = require('express')(),

server = require('http').Server(app),

bodyParser = require('body-parser')

express = require('express'),

cors = require('cors'),
http = require('http'),
path = require('path');
let articalRoute = require('./Routes/article'),
util = require('./Utlities/util'),

app.use(bodyParser.json());
app.use(cors());
app.use(function(err, req, res, next){
    return res.send({"statusCode": util.statusCode.ONE, "statusMessage": util.statusMessage.SOMETHING_WENT_WRONG});
});

app.use('./article', articleRoute);

app.use(function(req,res,next){
    next();
});

// First API Check

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../server/client/dist/index.html'));
})

server.listen(3000, function(){
    console.log('app listening on port: 3000')
});