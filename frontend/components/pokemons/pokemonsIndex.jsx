var React = require('react');
var ReactDOM = require('react-dom');
var PokemonStore = require('../../stores/pokemonStore');
var ClientActions = require('../../actions/clientActions.js');
var PokemonIndexItem = require('./pokemonIndexItem');

var PokemonsIndex = React.createClass({
  getInitialState: function() {
    return { pokemons: PokemonStore.all() };
  },

  componentDidMount: function() {
    this.PokemonListener = PokemonStore.addListener(this._onChange);
    ClientActions.fetchAllPokemons();
  },

  componentWillUnmount: function() {
    this.PokemonListener.remove();
  },

  _onChange: function() {
    this.setState( { pokemons: PokemonStore.all() } );
  },

  render: function() {
    var pokemonItems = this.state.pokemons.map(function(pokemon){
      return <PokemonIndexItem pokemon={pokemon} key={pokemon.id}/>;
    });
    return (<ul>{pokemonItems}</ul>);
  }
});


module.exports = PokemonsIndex;
