var ApiUtil = require('../util/apiUtil');

module.exports = {
  fetchAllPokemons: function() {
    ApiUtil.fetchAllPokemons();
  },
  fetchSinglePokemon: function(props) {
    ApiUtil.fetchSinglePokemon(props);
  },
  createPokemon: function(callback, e) {
    e.preventDefault();
    debugger
    ApiUtil.createPokemon(e, callback);
  }
};
