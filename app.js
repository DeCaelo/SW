var express = require('express');

var app = express();

app.set('view engine' ,'ejs');

// Routes
app.get('/', function(req, res) {
  res.render("home", {
    title : "Star Wars Movies"
  });
});

app.get('/star_wars_episode/:eposide_number?', function(req, res) {
  var eposide_number = req.params.eposide_number;
  res.send("C'est la page de l'épisode " + eposide_number);
});

// error
app.get('*', function(req, res) {
  res.send("<h2>Cette page n'existe pas, tu es perdu ?</h2>");
});

app.listen(3000, function() {

});
