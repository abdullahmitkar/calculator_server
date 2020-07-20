const express = require('express');

const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(bodyParser.json())

var logs = [];

app.get('/api/getlogs', function (req, res) {
	 res.header('Access-Control-Allow-Origin', '*');
    res.send(logs);
	
});

app.post('/api/addlogs', function (req, res) {
    let new_log = {"user": req.body.user, "calculation": req.body.calculation};
    while (logs.length >= 10){
		logs.splice(0,1);
	} 
	logs.push(new_log);
	res.header('Access-Control-Allow-Origin', '*');
	res.send(new_log);
});
 

app.listen(3000, ()=> console.log('Listening'))