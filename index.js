const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
var path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/form', (req, res) =>{
  console.log(req.body);
})

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('server is running on port' +  app.get('port'));
})
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client'));
}

app.get('/*', (request, response) => {
	response.sendFile(path.join(__dirname, 'client/src', 'index.js'));
});
