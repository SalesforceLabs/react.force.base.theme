'use strict';

const React = require('react-native');
const styles = require('./styles');
const Text = require('../../../Text');
const {View, TouchableHighlight} = React;

module.exports = React.createClass({
  getDefaultProps () {
    return {
      label:''
    };
  },
  render () {
    return (
        <View>
          <Text>{this.props.label}</Text>
        </View>
    );
  }
});