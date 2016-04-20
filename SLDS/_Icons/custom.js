'use strict';

const React = require('react-native');
const ImgView = require('../ImgView');
const Base = require('./base');
const iconNames = require('./iconNames/custom');

const icons = {};
iconNames.forEach((name,index)=>{
  icons[name.toLowerCase()] = index;
});

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      icon:0,
      style:{}
    };
  },
  render: function() {
    return (
      <Base 
        category={1}
        style={this.props.style}
        icon={this.props.icon}
      />
    );
  }
});

module.exports.names = icons;