var React = require('react');
var ReactDOM = require('react-dom');
var PokemonStore = require('../../stores/pokemonStore');
var ClientActions = require('../../actions/clientActions');
var ToyIndex = require('../toys/toyIndex');

var PokemonDetail = React.createClass({
  getInitialState: function () {
    return this.getStateFromStore();
  },

  getStateFromStore: function () {
    return {pokemon: PokemonStore.currentPokemon()
    };
  },

  componentDidMount: function() {
    this.pokemonListener = PokemonStore.addListener(this._onChange);
    ClientActions.fetchSinglePokemon(this.props);
  },

  componentWillReceiveProps: function (props) {
    ClientActions.fetchSinglePokemon(props);
  },

  componentWillUnmount: function() {
    this.pokemonListener.remove();
  },

  _onChange: function() {
    this.setState(this.getStateFromStore());
  },

  render: function () {
    if (!this.state.pokemon){
      return <div>no pokemon</div>;
    } else {
      return (
        <div>
          <div className="pokemon-detail-pane">
            <div className="detail">
              <img src={this.state.pokemon.image_url}/>
              {this.state.pokemon.name}
              {this.state.pokemon.poke_type}
              {this.state.pokemon.attack}
              {this.state.pokemon.defense}
              {this.state.pokemon.moves}
            </div>
          </div>
          <ToyIndex toys={this.state.pokemon.toys}/>
          {this.props.children}
        </div>
      );
    }
  }
});

module.exports = PokemonDetail;
