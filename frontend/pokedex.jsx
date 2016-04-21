var React = require("react");
var ReactDOM = require("react-dom");

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var HashHistory = require('react-router').hashHistory;

var PokemonsIndex = require('./components/pokemons/pokemonsIndex');

// clientAction = require('./actions/clientActions');
// PokemonStore = require('./stores/pokemonStore');

var App = React.createClass({
  render: function() {
    return (
      <div id="pokedex">
        <div className="pokemon-index-pane"><PokemonsIndex/></div>
      </div>
    );
  }
});

var routes = (
  <Route path='/' component={App}>
  </Route>
);

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <Router history={HashHistory}>
      {routes}
    </Router>
    ,document.getElementById("root")
  );
});
