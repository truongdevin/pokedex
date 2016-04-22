var React = require('react');
var PokemonStore = require('../../stores/pokemonStore');

var ToyDetail = React.createClass({
  getInitialState: function() {
    return this.getStateFromStore();
  },

  getStateFromStore: function() {
    if (!this.props.params.toyId) {
      return {};
    } else {
      var toyId = parseInt(this.props.params.toyId);
      return {toy: this.findToy(toyId)};
    }
  },

  findToy: function(toyId) {
    var pokemon = PokemonStore.currentPokemon();
    var currentToy;
    pokemon.toys.forEach(function(toy) {
      if (toy.id === toyId) {
        currentToy = toy;
      }
    });
    return currentToy;
  },

  _onChange: function() {
    this.setState(this.getStateFromStore());
  },

  componentDidMount: function() {
    this.toyListener = PokemonStore.addListener(this._onChange);
  },

  componentWillReceiveProps: function() {
    this._onChange();
  },

  componentWillUnmount: function() {
    this.toyListener.remove();
  },

  render: function() {
    return (
      <div>
        <div>{this.state.toy.happiness}</div>
        <div>{this.state.toy.name}</div>
        <div>{this.state.toy.pokemon}</div>
        <div>{this.state.toy.price}</div>
        <img src={this.state.toy.image_url}/>
      </div>
    );
  },
});



module.exports = ToyDetail;
