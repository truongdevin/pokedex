var React = require('react');
var ReactDOM = require('react-dom');

var PokemonIndexItem = React.createClass({
  render: function() {
    return (
      <li className='poke-list-item'>
        <div>{this.props.pokemon.name}</div>
        <div>{this.props.pokemon.poke_type}</div>
      </li>
    );
  }
});


module.exports = PokemonIndexItem;
