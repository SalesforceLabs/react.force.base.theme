'use strict';

const React = require('react-native');

const {
  StyleSheet,
  Text,
} = React;

const iconCodes = require('./iconCodes');

const getCodeByName = (iconName) => {
  const name = iconName.toLowerCase();
  const index = iconCodes.names.indexOf(name);
  return iconCodes.codes[index];
};

const getDefaultStyle = () => {
  return {
    fontFamily: 'SalesforceDesignSystemIconsUtility',
  }
};

module.exports = React.createClass({
  getDefaultProps (){
    return {
      style: {}
    }
  },
  render () {
    return (
      <Text {...this.props} style={[this.props.style, getDefaultStyle()]}>
        {getCodeByName('like')}
      </Text>
    );
  }
});
