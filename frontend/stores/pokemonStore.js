var Store = require('flux/utils').Store;
var PokemonConstants = require('../constants/pokemonConstants');
var AppDispatcher = require('../dispatcher/dispatcher');

var _pokemons = {};
var _currentPokemon;

var PokemonStore = new Store(AppDispatcher);

var resetPokemons = function(pokemons) {
  _pokemons = {};
  pokemons.forEach(function(pokemon){
    _pokemons[pokemon.id] = pokemon;
  });
  PokemonStore.__emitChange();
};

var updatePokemon = function(pokemon) {
  _currentPokemon = pokemon;
  PokemonStore.__emitChange();
};

PokemonStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case PokemonConstants.POKEMONS_RECEIVED:
      resetPokemons(payload.pokemons);
      break;
    case PokemonConstants.POKEMON_RECEIVED:
      updatePokemon(payload.pokemon);
      break;
  }
};

PokemonStore.currentPokemon = function() {
  return _currentPokemon;
};

PokemonStore.find = function (id) {
  return _pokemons[id];
};

PokemonStore.all = function () {
  var pokemons = [];
  Object.keys(_pokemons).forEach(function(pokemonId) {
    pokemons.push(_pokemons[pokemonId]);
  });
return pokemons;
};


module.exports = PokemonStore;
