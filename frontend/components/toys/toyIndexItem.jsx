var React = require('react');
var HashHistory = require('react-router').hashHistory;

var ToyIndexItem = React.createClass({
  switchToToy: function() {
    HashHistory.push('/pokemon/'+parseInt(this.props.toy.pokemon_id)+'/toy/'+parseInt(this.props.toy.id));
  },

  render: function () {
    return (
      <li className="toy-list-item" onClick={this.switchToToy} >
        <p>{this.props.toy.name}</p>
        <p>{this.props.toy.happiness}</p>
        <p>{this.props.toy.price}</p>
      </li>
    );
  }

});

module.exports = ToyIndexItem;
