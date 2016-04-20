'use strict';

const React = require('react-native');
const ImgView = require('../ImgView');
const Base = require('./base');
const iconNames = require('./iconNames/utility');

const icons = {};
iconNames.forEach((name,index)=>{
  icons[name.toLowerCase()] = index;
});

const getIcon = (iconName)=>{
  return icons[iconName];
};


module.exports = React.createClass({
  getDefaultProps() {
    return {
      icon:'',
      style:{}
    };
  },

  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  },

  render() {
    return (
      <Base {...this.props}
        ref={component => this._root = component}
        category={0}
        style={this.props.style}
        icon={getIcon(this.props.icon)}
      />
    );
  }
});