var React = require('react');
var ToyIndexItem = require('./toyIndexItem');
var HashHistory = require('react-router').hashHistory;

var ToyIndex = React.createClass({

  render: function() {
    if (!this.props.toys) {
      return (
        <div>No toys</div>
      );
    } else {
      var toys = this.props.toys.map(function(toy) {
        return <ToyIndexItem toy={toy} key={toy.id} />;
      });
      return (
        <ul>
          {toys}
        </ul>
      );
    }
  }
});

module.exports = ToyIndex;
