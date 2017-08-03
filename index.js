const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const middleware = require('./controllers/middleware.js');
const mainCtrl = require('./controllers/mainCtrl.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(middleware.addHeaders);


app.get('/name', mainCtrl.getUserName)
app.get('/location', mainCtrl.getLocation)
app.get('/occupations', mainCtrl.getOccupations)
app.get('/hobbies', mainCtrl.getHobbies)
app.get('/hobbies/:type', mainCtrl.getHobbiesByType)
app.get('/family', mainCtrl.getFamily)
app.get('/family:gender', mainCtrl.getFamilyByGender)
app.get('/restaurants', mainCtrl.getRestaurants)
app.get('/restaurants/:name', mainCtrl.getRestaurantsByName)
app.get('/skills', mainCtrl.getSkills)
app.get('/secrets/:username/:pin', middleware.verify, mainCtrl.getSecrets)

app.put('/name', mainCtrl.putUserName)
app.put('/location', mainCtrl.putUserLocation)

app.post('/hobbies', mainCtrl.postHobbies)
app.post('/occupations', mainCtrl.postOccupations)
app.post('/family', mainCtrl.postFamily)
app.post('/restaurants', mainCtrl.postRestaurants)
app.post('/skills', middleware.generateId, mainCtrl.postSkills)


app.listen(3000, function() {
  console.log("listening on port 3000");
});
