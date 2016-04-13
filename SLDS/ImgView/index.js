'use strict';

const React = require('react-native');
const styles = require('./styles');
const Text = require('../../Text');
const ImgView = require('../../ImgView');
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