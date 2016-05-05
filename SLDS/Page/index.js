'use strict';

const React = require('react-native');
const View = React.View;

const styles = {
  contaiter:{
    postion:'absolute',
    top:0,
    bottom:0,
    left:0,
    right:0
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