var React = require("react");
var ReactDOM = require("react-dom");

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var HashHistory = require('react-router').hashHistory;

var PokemonsIndex = require('./components/pokemons/pokemonsIndex');
var PokemonDetail = require('./components/pokemons/pokemonDetail');
var ToyDetail = require('./components/toys/toyDetail');
var PokemonForm = require('./components/pokemons/pokemonForm');

var App = React.createClass({
  render: function() {
    return (
      <div id="pokedex">
        <div className="pokemon-index-pane">
          <PokemonForm/>
          <PokemonsIndex/>
        </div>
        <div>{this.props.children}</div>
      </div>
    );
  }
});

var routes = (
  <Route path='/' component={App}>
    <Route path='pokemon/:pokemonId' component={PokemonDetail}>
      <Route path='toy/:toyId' component={ToyDetail}>
      </Route>
    </Route>
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
