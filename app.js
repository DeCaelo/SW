var express = require('express');

var app = express();

// Routes
app.get('/', function(req, res) {
  res.send("Réponse du serveur");
});

app.get('/star_wars_episode/:eposide_number?', function(req, res) {
  var eposide_number = req.params.eposide_number;
  res.send("C'est la page de l'épisode " + eposide_number);
});

app.listen(3000, function() {

});
