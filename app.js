var express = require('express');

var app = express();

app.set('view engine' ,'ejs');

var routes = require('./routes');

// Routes
app.get('/', routes.home);

app.get('/star_wars_episode/:eposide_number?', routes.movie_single);

// error
app.get('*', routes.notFound);

app.listen(3000, function() {

});
