'use strict';

const React = require('react-native');
const Text = require('../Text');
const View = React.View;


module.exports = React.createClass({
  getDefaultProps () {
    return {
      title:'',
      detail:''
    };
  },
  setNativeProps (nativeProps) {
    this._root.setNativeProps(nativeProps);
  },
  render () {
    return (
      <View><Text>@</Text></View>
    );
  }
});