'use strict';

const React = require('react-native');
const styles = require('../styles');
const ImgView = require('../ImgView');
const View = React.View;

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      icon:0,
      category:0,
      style:{}
    };
  },

  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  },

  render: function() {
    return (
      <ImgView {...this.props}
        ref={component => this._root = component}
        style={[this.props.style, {backgroundColor:'transparent'}]}
        category={this.props.category} icon={this.props.icon}
      />
    );
  }
});