const app = require('express')();

//controller 
const weatherController = require('../controllers/weather.controller');


app.get('/',weatherController.showPage);

app.get('/sensorhandler/:temprature/:humidity',weatherController.SensorDatahandler);

module.exports = app;