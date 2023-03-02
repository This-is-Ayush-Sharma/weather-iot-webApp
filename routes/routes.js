const app = require('express')();

//controller 
const weatherController = require('../controllers/weather.controller');


app.get('/',weatherController.showPage);

app.get('/sensorhandler',weatherController.SensorDatahandler);

module.exports = app;