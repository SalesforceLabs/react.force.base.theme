'use strict';

const React = require('react-native');
const ImgView = require('../ImgView');
const Base = require('./base');
const iconNames = require('./iconNames/standard');

const icons = {};
iconNames.forEach((name,index)=>{
  icons[name.toLowerCase()] = index;
});

const getIcon = (iconName)=>{
  return icons[iconName];
};

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      icon:'',
      style:{}
    };
  },
  render: function() {
    return (
      <Base 
        category={3}
        style={this.props.style}
        icon={getIcon(this.props.icon)}
      />
    );
  }
});