var React = require('react');
var ReactDOM = require('react-dom');
var HashHistory = require('react-router').hashHistory;

var PokemonIndexItem = React.createClass({
  showDetail: function() {
    HashHistory.push('/pokemon/' + parseInt(this.props.pokemon.id));
  },

  render: function() {
    return (
      <li className='poke-list-item' onClick={this.showDetail}>
        <div>{this.props.pokemon.name}</div>
        <div>{this.props.pokemon.poke_type}</div>
      </li>
    );
  }
});


module.exports = PokemonIndexItem;
