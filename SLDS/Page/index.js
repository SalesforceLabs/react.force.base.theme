'use strict';

const React = require('react-native');
const View = React.View;

const styles = {
  container:{
    flex: 1,
    backgroundColor:'white'
  }
};

module.exports = React.createClass({
  render: function() {
    return (
      <View style={[styles.container, this.props.style]}>
        {this.props.children}
      </View>
    );
  }
});