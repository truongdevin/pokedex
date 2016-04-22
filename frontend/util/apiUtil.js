var ServerActions = require('../actions/serverActions');

module.exports = {
  fetchAllPokemons: function () {
    $.ajax({
      url: 'api/pokemon',
      method: 'GET',
      success: function(pokemons) {
        ServerActions.receiveAllPokemons(pokemons);
      },
      dataType: 'json'
    });
  },
  fetchSinglePokemon: function(props) {
    $.ajax({
      url: 'api/pokemon/'+ props.params.pokemonId,
      method: 'GET',
      success: function(pokemon) {
        ServerActions.receiveSinglePokemon(pokemon);
      },
      dataType: 'json'
    });
  }
};
