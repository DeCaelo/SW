var moviesJSON = require('../movies.json');

exports.home = function(req, res) {

  var movies = moviesJSON.movies;

  res.render("home", {
    title : "Star Wars Movies",
    movies : movies
  });
};

exports.movie_single = function(req, res) {
  var eposide_number = req.params.eposide_number;
  res.send("C'est la page de l'épisode " + eposide_number);
};

// error
exports.notFound = function(req, res) {
  res.send("<h2>Cette page n'existe pas, tu es perdu ?</h2>");
};
