var Store = require('flux/utils').Store;
var PokemonConstants = require('../constants/pokemonConstants');
var AppDispatcher = require('../dispatcher/dispatcher');

var _pokemons = {};

var PokemonStore = new Store(AppDispatcher);

var resetPokemons = function(pokemons) {
  _pokemons = {};
  pokemons.forEach(function(pokemon){
    _pokemons[pokemon.id] = pokemon;
  });
  PokemonStore.__emitChange();
};

PokemonStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case PokemonConstants.POKEMONS_RECEIVED:
      resetPokemons(payload.pokemons);
      break;
  }
};

PokemonStore.all = function () {
  var pokemons = [];
  Object.keys(_pokemons).forEach(function(pokemonId) {
    pokemons.push(_pokemons[pokemonId]);
  });
return pokemons;
};


module.exports = PokemonStore;
