var React = require('react');
var HashHistory = require('react-router').hashHistory;
var ClientActions = require('../../actions/clientActions');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var PokemonForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return {
      name: "",
      attack: "",
      defense: "",
      poke_type: "",
      move_one: "",
      move_two: ""
    };
  },

  renderNewPokemon: function() {
    HashHistory.push('pokemon/' + this.props.params.pokemonId);
  },

  render: function(){
    return (
      <form className="new-pokemon" onSubmit={ClientActions.createPokemon.bind(this, this.renderNewPokemon)}>
        <label>Name
          <input type='text' valueLink={this.linkState("name")}/>
        </label>

        <label>Attack
          <input type='text' valueLink={this.linkState("attack")}/>
        </label>

        <label>Defense
          <input type='text' valueLink={this.linkState("defense")}/>
        </label>

        <label>Type
          <select className="type-selector">
            <option valueLink={this.linkState("poke_type")}>fire</option>
            <option valueLink={this.linkState("poke_type")}>electric</option>
            <option valueLink={this.linkState("poke_type")}>normal</option>
            <option valueLink={this.linkState("poke_type")}>ghost</option>
            <option valueLink={this.linkState("poke_type")}>psychic</option>
            <option valueLink={this.linkState("poke_type")}>water</option>
            <option valueLink={this.linkState("poke_type")}>bug</option>
            <option valueLink={this.linkState("poke_type")}>dragon</option>
            <option valueLink={this.linkState("poke_type")}>grass</option>
            <option valueLink={this.linkState("poke_type")}>fighting</option>
            <option valueLink={this.linkState("poke_type")}>ice</option>
            <option valueLink={this.linkState("poke_type")}>flying</option>
            <option valueLink={this.linkState("poke_type")}>poison</option>
            <option valueLink={this.linkState("poke_type")}>ground</option>
            <option valueLink={this.linkState("poke_type")}>rock</option>
            <option valueLink={this.linkState("poke_type")}>steel</option>
          </select>
        </label>

        <label>Move #1
          <input type='text' valueLink={this.linkState("move_one")}/>
        </label>

        <label>Move #2
          <input type='text' valueLink={this.linkState("move_two")}/>
        </label>

        <button type="submit">Add Pokemon!</button>

      </form>
    );
  }
});


module.exports = PokemonForm;
